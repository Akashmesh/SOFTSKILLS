import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: true,
    },
    collegeCode: {
      type: String,
      required: true,
      unique: true,
    },
    principalName: String,
    principalMobile: String,
    principalEmail: String,
    coordinatorName: String,
    coordinatorMobile: String,
    coordinatorEmail: String,
  },
  { timestamps: true }
);

export const College = mongoose.model("College", collegeSchema);
