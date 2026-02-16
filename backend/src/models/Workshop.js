import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema(
  {
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "submitted", "verified"],
      default: "draft",
    },
  },
  { timestamps: true }
);

export const Workshop = mongoose.model("Workshop", workshopSchema);
