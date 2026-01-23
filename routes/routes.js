import express from "express";
import albumRoutes from "./albumRoute.js";
import userRoutes from "./userRoute.js";

const router = express.Router();

// Assign prefixes to your specific routers
router.use("/albums", albumRoutes);
router.use("/users", userRoutes);

export default router;