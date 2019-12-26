import express from "express";
import morgan from "morgan";
import app from "./app";

const PORT = 4000;

const handleListening = () => {
  console.log("✅  Listening on: http://localhost:4000");
};

app.listen(PORT, handleListening);
