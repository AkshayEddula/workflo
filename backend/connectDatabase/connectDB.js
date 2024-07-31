import mongoose from "mongoose";

export const ConnectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDatabase : ${connection}`);
    } catch (error) {
        console.log(error,"Error connecting to MongoDatabase");
    }
}