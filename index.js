
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";


const app= express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT||7000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then(()=>{
    console.log("DB connect ssuccessfully")
    app.listen(PORT,()=>{
        console.log(`server is running on port: ${PORT} `)
    })
}).catch(error=>console.log(error));

app.use("/api",route)