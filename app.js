import express from "express"
import connectDB from "./config/db.js";
import dotenv from "dotenv"
connectDB
dotenv.config();
const app = express()
import cookieParser from "cookie-parser"
import cors from 'cors'
// import fileUpload from "express-fileupload";


app.use(cors())

//cookies and filemiddleware
app.use(cookieParser())
// app.use(fileUpload())


// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import all routes here
import cheatBoardRoutes from "./routes/cheatBoardRoutes.js";

// router middleware
app.use("/api/v1", cheatBoardRoutes)



export default app;