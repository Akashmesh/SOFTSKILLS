import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import collegeRoutes from "./routes/collegeRoutes.js"
import workshopRoutes from "./routes/workshopRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import certificateRoutes from "./routes/certificateRoutes.js";
import excelRoutes from "./routes/excelRoutes.js";

dotenv.config();
connectDB();
const app =express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/workshops", workshopRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/excel", excelRoutes);


app.get("/", (req, res) => {
    res.send("soft skill backend api is working");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("app is listening on port" , PORT);
})