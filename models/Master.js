import mongoose from "mongoose";

const MasterSchema = new mongoose.Schema({
  info: {
    type: String,
    required: "master infomation is required",
  },
  language: {
    type: Array,
    required: "language is required",
  },
});

const model = mongoose.model("Master", MasterSchema);
export default model;
