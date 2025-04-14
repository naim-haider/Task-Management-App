import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
