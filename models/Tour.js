import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  thumbnailUrl: {
    type: String,
    required: "Thumbnail is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  hostLanguage: {
    type: String,
    required: "Laguage is required",
  },
  hostself: {
    type: String,
    required: "Host self is required",
  },
  description: {
    type: Object,
    required: "Program is required",
  },
  coursePhotos: {
    type: Array,
    required: "Course photo is required",
  },
  courseText: {
    type: Array,
    required: "Course text is required",
  },
  concept: {
    type: Array,
    required: "Concept is required",
  },
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Tour", TourSchema);
export default model;
