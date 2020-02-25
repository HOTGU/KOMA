import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Tour";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT | 4000;

const handleListening = () => {
  console.log("✅  Listening on: http://localhost:4000");
};

app.listen(PORT, handleListening);
