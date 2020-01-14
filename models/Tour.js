import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: "Image URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Tour", TourSchema);
export default model;
