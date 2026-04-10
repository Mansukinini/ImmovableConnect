import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        // const client = new MongoClient(uri);
        // await client.connect();
        await mongoose.connect(db);
        console.log("MongoDB Connected! ✅");
    }
    catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;