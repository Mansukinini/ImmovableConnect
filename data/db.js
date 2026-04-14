import mongoose from "mongoose";
import env from "dotenv";

env.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected! ✅");
    }
    catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;