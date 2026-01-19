import userModel from "../mongo/models/user";

import userModel from "../models/User.js";

// --- SIGNUP ---
export const signup = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const newUser = new userModel({
      username,
      email,
      password, 
      firstName,
      lastName
    });

    await newUser.save();
    res.status(201).json({ message: "User created!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error during signup", error: error.message });
  }
};

// --- LOGIN ---
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error: error.message });
  }
};