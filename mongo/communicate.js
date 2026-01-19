import mongoose from "mongoose";
import userSchema from "./models/user.js";
import albumSchema from "./models/album.js"

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
    userSchema as User,
    albumSchema as Album
};