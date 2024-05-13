import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    program: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    certification: {
      type: String,
      required: true,
    },
    finalProject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
