import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import { connect } from "./mongo/communicate.js";

const app = express();

app.use(express.json());

// --- Database Connection ---
connect();


// --- The Clean Link ---
// Every request starting with /api will now go to the mainRouter
app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});