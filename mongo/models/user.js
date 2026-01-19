import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String
});
const userModel = mongoose.model("users",userSchema)
export default userModel;