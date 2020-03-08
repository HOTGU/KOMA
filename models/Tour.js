import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  description: Object,
  concept: Array,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Tour", TourSchema);
export default model;
