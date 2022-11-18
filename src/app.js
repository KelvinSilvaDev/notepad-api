import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log("Request received");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors);
  next();
});
routes(app);

export default app;
