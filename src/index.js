import dotenv from "dotenv"
import connectDB from "./db/database.js"

dotenv.config({
    path:"./env"
});

/// db connection
connectDB()
.then(()=>{
    app.on("error", (error) => {
        console.log(`ERROR: ${error}`);
        throw error;
    });
    app.listen(process.env.PORT, () => {
        console.log(`App is listening on PORT: ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log(`MongoDB connection failed: ${error}`);
});











