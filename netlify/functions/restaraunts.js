/* =========================================================
   SIDEQUEST — GOOGLE PLACES RESTAURANTS API
   Retrieves real restaurant and food-place listings.
   API key is stored securely in Netlify environment variables.
   ========================================================= */

exports.handler = async function (event) {

    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

    if (!API_KEY) {
        return {
            statusCode: 503,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                error: "Google Places API key has not been configured."
            })
        };
    }

    const location =
        event.queryStringParameters?.location || "Johannesburg";

    try {

        const response = await fetch(
            "https://places.googleapis.com/v1/places:searchText",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": API_KEY,
                    "X-Goog-FieldMask": [
                        "places.id",
                        "places.displayName",
                        "places.formattedAddress",
                        "places.types",
                        "places.rating",
                        "places.userRatingCount",
                        "places.priceLevel",
                        "places.websiteUri",
                        "places.googleMapsUri"
                    ].join(",")
                },

                body: JSON.stringify({
                    textQuery: `restaurants, cafes and food places in ${location}`,
                    pageSize: 20
                })
            }
        );

        if (!response.ok) {
            const errorDetails = await response.text();

            throw new Error(
                `Google Places returned status ${response.status}: ${errorDetails}`
            );
        }

        const data = await response.json();

        const places = data.places || [];

        const formattedRestaurants = places.map((place, index) => {

            const name =
                place.displayName?.text || "Unnamed restaurant";

            const address =
                place.formattedAddress || location;

            const rating =
                place.rating || null;

            const ratingCount =
                place.userRatingCount || 0;

            const priceLevel =
                place.priceLevel || "";

            let category = "restaurant";

            const types = place.types || [];

            if (
                types.includes("cafe") ||
                types.includes("coffee_shop")
            ) {
                category = "cafe";
            } else if (
                types.includes("bakery")
            ) {
                category = "bakery";
            } else if (
                types.includes("bar") ||
                types.includes("night_club")
            ) {
                category = "nightlife";
            }

            let description = "Discover this food spot in Johannesburg.";

            if (rating) {
                description += ` Rated ${rating}/5 from ${ratingCount} reviews.`;
            }

            if (priceLevel) {
                description += ` Price category: ${priceLevel.replace("PRICE_LEVEL_", "").toLowerCase()}.`;
            }

            return {
                id: String(place.id || `google-place-${index}`),
                type: "restaurant",
                category: category,
                title: name,
                name: name,
                location: address,
                address: address,
                date: "",
                price: "",
                description: description,
                image: "",
                url: place.websiteUri || place.googleMapsUri || "",
                mapsUrl: place.googleMapsUri || "",
                rating: rating,
                ratingCount: ratingCount,
                priceLevel: priceLevel,
                source: "Google Places"
            };

        });

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=300"
            },
            body: JSON.stringify(formattedRestaurants)
        };

    } catch (error) {

        console.error("Google Places API error:", error);

        return {
            statusCode: 502,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                error: "Unable to retrieve restaurants from Google Places.",
                details: error.message
            })
        };

    }

};