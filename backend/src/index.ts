import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import dotenv from "dotenv";
import mongoose from "mongoose";//connect and interact with database without writing complicated queris
import userRoutes from "./routes/users";//importing the register routes
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import myCarRoutes from "./routes/my-cars";
import path from "path";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);//use as string to catch any issues connecting to the database

const app = express();
app.use(cookieParser());
app.use(express.json());//convert body of api requets in json automatically
app.use(express.urlencoded({extended: true}));
app.use(cors({
  //only accept request from this url and must include credentials
  origin: process.env.FRONTEND_URL,
  credentials: true,
  })
);//cors is for security: it prevent certain requests from certains URLs

// app.get("/api/test", async (req: Request, res: Response)=>{
//   res.json({message: "Hello from express endpoint!"});
// });//Test request to see if it's actually working
app.use(express.static(path.join(__dirname,"../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)//test with api client
app.use("/api/my-cars", myCarRoutes);

app.get("*", (req: Request, res: Response)=>{
  res.sendFile(path.join(__dirname, "../../frontend/dist/indext.html"))
});

app.listen(7002, ()=>{
  console.log("Server running on localhost:7002");
});//Start the server