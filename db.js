import mongoose from "mongoose";
import env from "dotenv";
import config from "config";

env.config();

const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("MongoDB Connected! ✅");
    }
    catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;