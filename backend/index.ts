import express from "express";

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  const addressInfo = server.address();

  if (addressInfo && typeof addressInfo === "object") {
    const host = addressInfo.address;
    const port = addressInfo.port;
    console.log(`Server is running at http://${host}:${port}`);
  } else {
    console.error("Could not retrieve server address information.");
  }
});
