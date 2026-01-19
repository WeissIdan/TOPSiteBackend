import express from "express";
import albumRoutes from "./albumRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

// Assign prefixes to your specific routers
router.use("/albums", albumRoutes);
router.use("/users", userRoutes);

export default router;