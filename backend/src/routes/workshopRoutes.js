import express from "express";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";
import { createWorkshop, getCollegeWorkshops, getAllWorkshops, verifyWorkshop } from "../controllers/workshopController.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("college"), createWorkshop);
router.get("/", protect, authorizeRoles("college"), getCollegeWorkshops);
router.get("/all", protect, authorizeRoles("admin"), getAllWorkshops);
router.put("/verify/:id", protect, authorizeRoles("admin"),verifyWorkshop);
export default router;
