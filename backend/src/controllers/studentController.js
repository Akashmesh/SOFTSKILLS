import { Student } from "../models/Student.js";
import { generateCertificateNumber } from "../utils/generateCertificateNumber.js";
import { studentSchema } from "../validators/studentValidator.js";

export const addStudent = async (req, res) => {
  try {
    const data = studentSchema.parse(req.body);

    const certificateNumber = await generateCertificateNumber();

    const student = await Student.create({
      workshopId: req.params.workshopId,
      name: data.name,
      class: data.class,
      certificateNumber,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.errors || error.message });
  }
};

export const getStudents = async (req, res) => {
  const students = await Student.find({
    workshopId: req.params.workshopId,
  });

  res.json(students);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.studentId);
  res.json({ message: "Student deleted" });
};
