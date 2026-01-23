import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  birthday: Date,
  id: String,
  phone: String
});
const userModel = mongoose.model("users",userSchema, "users")
export default userModel;