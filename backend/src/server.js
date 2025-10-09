import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import ratelimiter from "./middleware/ratelimiter.js"
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()


if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173",
    }))
}
app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes", noteRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running on port: ", PORT)
    })
});