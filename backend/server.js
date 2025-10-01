import express from "express"
// const express = require("express")

const app = express()

app.get("/api/notes",(req,res) => {
    res.status(200).send("First end point 5 niggerchod")
})

app.post("/api/notes", (req,res)=>{
    res.status(201).json({"message":"Note created scuccessfully"})
})

app.put("/api/notes/:id", (req,res)=>{
    res.status(200).json({"message":"Note updated scuccessfully"})
})

app.delete("/api/notes/:id", (req,res)=>{
    res.status(200).json({"message":"Note deleted scuccessfully"})
})

app.listen(5001, () => {
    console.log("server is running on port 5001")
})