import mongoose from "mongoose";
import userModel from "./models/user.js";
import albumModel from "./models/album.js"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB 🌊");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};

export {
    connect,
    userModel as User,
    albumModel as Album
};