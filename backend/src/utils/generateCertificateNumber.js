import { Counter } from "../models/Counter.js";

export const generateCertificateNumber = async () => {
  const year = new Date().getFullYear();

  const counter = await Counter.findOneAndUpdate(
    { name: "certificate" },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );

  const serial = counter.value.toString().padStart(4, "0");

  return `SGBAU/${year}/${serial}`;
};
