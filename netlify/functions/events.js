
/* =================================================
   SIDEQUEST — PREDICTHQ EVENTS API
   Real event information, no demo data.
   Used by Netlify and local Express backend.
   ================================================= */

const ENDPOINT = "https://api.predicthq.com/v1/events/";

function respond(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(data)
  };
}

function safeText(value) {
  return typeof value === "string" ? value : "";
}

function formatEvent(event) {
  const venue = Array.isArray(event.entities)
    ? event.entities.find(entity => entity.type === "venue")
    : null;

  const address = event.geo?.address || {};

  const venueName = safeText(venue?.name);
  const venueAddress = safeText(
    venue?.formatted_address
  );

  const locality = safeText(address.locality);
  const region = safeText(address.region);
  const country = safeText(event.country);

  const location = [
    venueName,
    venueAddress || locality || region,
    country
  ].filter(Boolean).join(", ") || "Location unavailable";

  return {
    id: `predicthq-${event.id}`,
    type: "event",
    source: "PredictHQ",

    title: safeText(event.title) || "Untitled event",

    date: event.start_local || event.start || "",

    endDate: event.end_local || event.end || "",

    location,
    city: locality,
    country,

    category: safeText(event.category) || "Event",

    description: safeText(event.description),

    rank: event.rank ?? null,

    // PredictHQ does not guarantee these fields.
    // Do not invent ticket prices or images.
    price: null,
    currency: "",
    image: "",
    url: "",

    // Only link to a venue map when coordinates
    // are actually included in the API response.
    coordinates:
      Array.isArray(event.geo?.geometry?.coordinates)
        ? event.geo.geometry.coordinates
        : Array.isArray(event.location)
          ? event.location
          : null
  };
}

exports.handler = async function (request = {}) {
  const token = process.env.PREDICTHQ_API_KEY;

  if (!token || token.startsWith("PASTE_")) {
    return respond(503, {
      error: "PredictHQ API token is not configured."
    });
  }

  const params = request.queryStringParameters || {};

  // South Africa is the default.
  // "world" removes the country restriction.
  const scope = String(params.scope || "ZA").toUpperCase();

  const validCountry =
    scope === "WORLD" || /^[A-Z]{2}$/.test(scope);

  if (!validCountry) {
    return respond(400, {
      error: "Invalid country selection."
    });
  }

  const rawPage = Number(params.page || 0);

  const page =
    Number.isInteger(rawPage) && rawPage >= 0
      ? Math.min(rawPage, 100)
      : 0;

  const limit = 20;

  const keyword = String(params.keyword || "")
    .trim()
    .slice(0, 100);

  const url = new URL(ENDPOINT);

  url.searchParams.set("limit", String(limit));
  url.searchParams.set("offset", String(page * limit));
  url.searchParams.set("sort", "start");

  // Search for events starting from today.
  // Use the UTC date for a consistent API filter.
  const today = new Date().toISOString().slice(0, 10);

  url.searchParams.set("start.gte", today);

  // Country filtering.
  if (scope !== "WORLD") {
    url.searchParams.set("country", scope);
  }

  // Optional keyword search.
  if (keyword) {
    url.searchParams.set("q", keyword);
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"
      },
      signal: AbortSignal.timeout(20000)
    });

    if (!response.ok) {
      let message = "";

      try {
        const errorData = await response.json();
        message =
          errorData.error ||
          errorData.message ||
          JSON.stringify(errorData).slice(0, 300);
      } catch {
        message = `HTTP ${response.status}`;
      }

      console.error(
        "PredictHQ API status:",
        response.status,
        message
      );

      return respond(response.status, {
        error:
          response.status === 401 ||
          response.status === 403
            ? "PredictHQ denied access. Check your token and subscription."
            : response.status === 429
              ? "PredictHQ API usage limit reached."
              : "PredictHQ request failed.",
        upstreamStatus: response.status,
        details: message
      });
    }

    const data = await response.json();

    if (!Array.isArray(data.results)) {
      return respond(502, {
        error: "Unexpected PredictHQ response structure."
      });
    }

    const events = data.results
      .filter(item =>
        item &&
        item.id &&
        item.title &&
        !item.deleted_reason
      )
      .map(formatEvent);

    return respond(200, {
      events,
      source: "PredictHQ",
      scope,
      page,
      count: Number(data.count) || 0,
      hasMore: Boolean(data.next),
      overflow: Boolean(data.overflow)
    });

  } catch (error) {
    console.error(
      "PredictHQ connection error:",
      error.message
    );

    return respond(502, {
      error: "Could not retrieve events from PredictHQ.",
      details: error.name === "TimeoutError"
        ? "PredictHQ did not respond in time."
        : error.message
    });
  }
};
