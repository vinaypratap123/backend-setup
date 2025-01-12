import dotenv from "dotenv"
import connectDB from "./db/index.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
const app = express()
dotenv.config({
    path:'./env'
})

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded)
app.use(express.static('public'))
export {app}
connectDB()










