//connecting to the database
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

export const connectDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGO_URI); //connection in .env
        await mongoose.connect("mongodb+srv://innovationhub:5WWuQKVSeDrvrVgw@cluster0.iunhkcb.mongodb.net/database1?appName=Cluster0");

        console.log("MongoDB connected successfully");

    } catch(error) {
        console.error("error connecting to MongoDB:", error);
        process.exit(1); //exit with failure
    }
}

//mongodb+srv://innovationhub:5WWuQKVSeDrvrVgw@cluster0.iunhkcb.mongodb.net/______[database name]?appName=Cluster0
//in .env file to keep the authentication details safe

