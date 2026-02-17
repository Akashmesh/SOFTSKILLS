import XLSX from "xlsx";
import { Student } from "../models/Student.js";
import { Workshop } from "../models/Workshop.js";
import { generateCertificateNumber } from "../utils/generateCertificateNumber.js";

export const uploadExcel = async (req, res) => {
  try {
    const workshopId = req.params.workshopId;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!workshopId) {
      return res.status(400).json({ message: "Workshop ID is required" });
    }

    // Validate workshop exists
    const workshop = await Workshop.findById(workshopId);
    if (!workshop) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    if (!data.length) {
      return res.status(400).json({ message: "Excel file is empty" });
    }

    const students = [];

    for (let row of data) {
      if (!row.name || !row.class) continue;

      const certificateNumber = await generateCertificateNumber();

      students.push({
        workshopId,
        name: row.name,
        class: row.class,
        certificateNumber,
      });
    }

    await Student.insertMany(students);

    res.json({
      message: "Excel data imported successfully",
      count: students.length,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
