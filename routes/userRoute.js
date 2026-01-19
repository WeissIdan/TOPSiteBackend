import express from "express";
import { signup, login } from "../controllers/userController.js";

const router = express.Router();

// Route for creating a new user account
router.post("/signup", signup);

// Route for authenticating an existing user
router.post("/login", login);

export default router;