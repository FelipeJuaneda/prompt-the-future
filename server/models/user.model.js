import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    location: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    img: {
      type: String,
      trim: true,
    },
    socialMedia: {
      instagram: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
      x: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
