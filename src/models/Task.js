import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required."],
      unique: true,
      trim: true,
      minlength: [3, "The minimum length of the title is 3 characters."],
      maxlength: [40, "The maximum length of the title is 40 characters."],
    },
    description: {
      type: String,
      required: [true, "The description is required."],
      trim: true,
      maxlength: [
        200,
        "The maximum length of the description is 200 characters.",
      ],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default models.Task || model("Task", taskSchema);
