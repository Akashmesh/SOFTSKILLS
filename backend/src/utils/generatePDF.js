import PDFDocument from "pdfkit";
import fs from "fs";

export const generateCertificatePDF = (student, workshop, college, res) => {
  const doc = new PDFDocument({ size: "A4" });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${student.name}-certificate.pdf`
  );

  doc.pipe(res);

  doc.fontSize(20).text("Sant Gadge Baba Amravati University", {
    align: "center",
  });

  doc.moveDown();
  doc.fontSize(16).text("Soft Skills Workshop Certificate", {
    align: "center",
  });

  doc.moveDown(2);

  doc.fontSize(14).text(`Certificate Number: ${student.certificateNumber}`);
  doc.text(`Student Name: ${student.name}`);
  doc.text(`Class: ${student.class}`);
  doc.text(`College: ${college.collegeName}`);
  doc.text(
    `Workshop Duration: ${new Date(
      workshop.fromDate
    ).toDateString()} to ${new Date(workshop.toDate).toDateString()}`
  );

  doc.end();
};
