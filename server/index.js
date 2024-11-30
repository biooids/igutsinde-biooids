"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));

const path = require("path");

const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
if (!process.env.MONGO) {
  throw new Error("MONGO environment variable is missing.");
}
mongoose_1.default
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((error) => {
    console.log(
      "MongoDB Atlas failed to connect due to error :",
      error.message || error
    );
  });

// Middleware
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/payment", payment_routes_1.default);

// Static Files
const frontendPath = path.join(__dirname, "../frontend/dist"); // Adjusted path
app.use(express_1.default.static(frontendPath));

// Catch-All for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Error Handler
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  const message =
    `Iki gikorwa cyanze bitewe nuko: ${error.message}` ||
    "Iki gikorwa cyanze bitewe nuko: internal server error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

// Start Server
const server = app.listen(PORT, () => {
  const addressInfo = server.address();
  if (addressInfo && typeof addressInfo === "object") {
    const host =
      addressInfo.address === "::" ? "localhost" : addressInfo.address;
    const port = addressInfo.port;
    console.log(`Server is running at http://${host}:${port}`);
  } else {
    console.error("Could not retrieve server address information.");
  }
});
