import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function DatabaseCon() {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database Connected Successfully Done! ${conn.connection.host}`);
    } catch (error) {
        console.log('Database Connection Failed !! ', error);
        process.exit(1);
    }
}

export default DatabaseCon;