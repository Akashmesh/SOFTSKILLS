import { Workshop } from "../models/Workshop.js";
import { workshopSchema } from "../validators/workshopValidator.js";

export const createWorkshop = async (req, res) => {
  try {
    const data = workshopSchema.parse(req.body);

    const workshop = await Workshop.create({
      collegeId: req.user.collegeId,
      fromDate: data.fromDate,
      toDate: data.toDate,
    });

    res.status(201).json(workshop);
  } catch (error) {
    res.status(400).json({ message: error.errors || error.message });
  }
};

export const getCollegeWorkshops = async (req, res) => {
  const workshops = await Workshop.find({
    collegeId: req.user.collegeId,
  });

  res.json(workshops);
};
