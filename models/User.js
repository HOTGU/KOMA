import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  country: {
    type: String,
    required: "country is required",
  },
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
  },
  avatarUrl: {
    type: String,
    required: "image is required",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  tours: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
