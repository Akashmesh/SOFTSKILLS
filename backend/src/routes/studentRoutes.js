import express from "express";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";
import { addStudent, getStudents, deleteStudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/:workshopId", protect, authorizeRoles("college"), addStudent);
router.get("/:workshopId", protect, authorizeRoles("college"), getStudents);
router.delete("/:studentId", protect, authorizeRoles("college"), deleteStudent);

export default router;
