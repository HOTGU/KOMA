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
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Tour", TourSchema);
export default model;
