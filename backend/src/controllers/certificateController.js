import { Student } from "../models/Student.js";
import { Workshop } from "../models/Workshop.js";
import { College } from "../models/College.js";
import { generateCertificatePDF } from "../utils/generatePDF.js";

export const generateCertificate = async (req, res) => {
  const student = await Student.findById(req.params.studentId);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const workshop = await Workshop.findById(student.workshopId);
  const college = await College.findById(workshop.collegeId);

  generateCertificatePDF(student, workshop, college, res);
};
