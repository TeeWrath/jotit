import express from "express"
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import ratelimiter from "./middleware/ratelimiter.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes", noteRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running on port: ", PORT)
    })
});