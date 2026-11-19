
/* ===========================================
   SIDEQUEST — LOCAL BACKEND
   PredictHQ API integration
   =========================================== */

const express = require("express");
const cors = require("cors");

require("dotenv").config({
  override: true
});

const { handler } = require(
  "./netlify/functions/events.js"
);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Allow VS Code Live Server origins.
app.use(cors({
  origin(origin, callback) {
    if (
      !origin ||
      /^http:\/\/(localhost|127\.0\.0\.1):55\d\d$/.test(origin)
    ) {
      return callback(null, true);
    }

    return callback(new Error("Origin not allowed"));
  }
}));

// Test route.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    provider: "PredictHQ",
    message: "SideQuest backend is running"
  });
});

// Events route.
app.get("/api/events", async (req, res) => {
  try {
    const result = await handler({
      queryStringParameters: req.query
    });

    res.status(result.statusCode || 500);

    if (result.headers) {
      res.set(result.headers);
    }

    res.send(result.body || "");

  } catch (error) {
    console.error("Backend error:", error.message);

    res.status(500).json({
      error: "Unable to process events request."
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `SideQuest backend running at http://localhost:${PORT}`
  );
});
