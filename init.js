import express from "express";
import morgan from "morgan";
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Tour";
import "./models/Comment";

const PORT = process.env.PORT | 4000;

const handleListening = () => {
  console.log("✅  Listening on: http://localhost:4000");
};

app.listen(PORT, handleListening);
