
/* ===========================================
   SIDEQUEST — FRONTEND API CLIENT
   PredictHQ events
   =========================================== */

(function () {
  "use strict";

  const local = [
    "localhost",
    "127.0.0.1"
  ].includes(window.location.hostname);

  const BASE_URL = local
    ? "http://localhost:3000/api/events"
    : "/.netlify/functions/events";

  window.SideQuestAPI = {

    async getEvents(options = {}) {
      const {
        page = 0,
        scope = "ZA",
        keyword = ""
      } = options;

      const params = new URLSearchParams({
        page: String(page),
        scope: String(scope),
        keyword: String(keyword)
      });

      const response = await fetch(
        `${BASE_URL}?${params.toString()}`,
        {
          headers: {
            Accept: "application/json"
          }
        }
      );

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server did not return valid JSON."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
          `Events request failed: ${response.status}`
        );
      }

      if (!Array.isArray(data.events)) {
        throw new Error(
          "PredictHQ returned an unexpected response."
        );
      }

      return data;
    }

  };
})();
