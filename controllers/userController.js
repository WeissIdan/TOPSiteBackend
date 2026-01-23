// --- REGISTER ---
export const signup = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, id } = req.body;

    // Requirement: 400 - Missing details in request body
    if (!username || !email || !password || !id) {
      return res.status(400).json({ message: "Missing required details." });
    }

    // Requirement: 409 - User already exists (Conflict)
    const existingUser = await userModel.findOne({ $or: [{ email }, { id }] });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists in the system." });
    }

    const newUser = new userModel({ username, email, password, firstName, lastName, id });
    await newUser.save();
    
    // Requirement: 201 - User created successfully
    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error during signup", error: error.message });
  }
};

// --- LOGIN ---
export const login = async (req, res) => {
  try {
    // Requirement: Get id and pass from req.query
    const { id, pass } = req.query;

    // Requirement: 400 - Missing details
    if (!id || !pass) {
      return res.status(400).json({ message: "Missing id or password in query." });
    }

    const user = await userModel.findOne({ id });

    // Requirement: 404 - User with this ID does not exist
    if (!user) {
      return res.status(404).json({ message: "User ID does not exist. Please register." });
    }

    // Check password
    if (user.password !== pass) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // Requirement: 200 - Success
    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error: error.message });
  }
};

// --- UPDATE (PATCH) ---
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Requirement: 400 - ID is NOT allowed in the body
    if (updateData.id) {
      return res.status(400).json({ message: "ID cannot be modified in the request body." });
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No elements provided to update." });
    }

    const updatedUser = await userModel.findOneAndUpdate({ id }, updateData, { new: true });

    if (!updatedUser) {
      return res.status(400).json({ message: "ID does not exist in the system." });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE ---
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOneAndDelete({ id });

    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    res.status(200).json({ message: "User and related data deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET USER ---
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({ id });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};