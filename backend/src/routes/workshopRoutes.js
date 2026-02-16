import express from "express";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";
import { createWorkshop, getCollegeWorkshops } from "../controllers/workshopController.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("college"), createWorkshop);
router.get("/", protect, authorizeRoles("college"), getCollegeWorkshops);

export default router;
