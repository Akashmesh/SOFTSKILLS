import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    workshopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workshop",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    certificateNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
