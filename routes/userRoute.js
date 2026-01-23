import express from "express";
import { signup, login } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login); 
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;