import mongoose from "mongoose";

const courseContentSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    ref: "Course",
  },
  videos: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
      duration: { type: String, required: true },
    },
  ],
  readings: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
      pages: { type: Number, required: true },
    },
  ],
  quizzes: [
    {
      title: { type: String, required: true },
      questions: [
        {
          question: { type: String, required: true },
          options: [String],
          answer: { type: String, required: true },
        },
      ],
    },
  ],
});

export const CourseContent = mongoose.model(
  "CourseContent",
  courseContentSchema,
  "course-contents"
);
