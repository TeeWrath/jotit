import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import ratelimiter from "./middleware/ratelimiter.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors({
    origin:"http://localhost:5173",
} ))
app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes", noteRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running on port: ", PORT)
    })
});