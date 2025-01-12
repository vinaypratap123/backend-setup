import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"
import express from 'express' 
const app = express();
const connectDB = async()=>{
    try {
       
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`)
        app.on('error', (error) => {
            console.log(`ERROR: ${error}`)
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT: ${process.env.PORT}`)
        })

    } catch (error) {
        console.log(`ERROR: ${error}`)
        process.exit(1)
        
    }
}
export default connectDB