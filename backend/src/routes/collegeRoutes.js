import express from "express"
import { createCollege } from "../controllers/collegeController.js"
import { authorizeRoles, protect } from "../middlewares/authMiddleware.js"

const router = express.Router();


router.post("/", protect, authorizeRoles("admin"), createCollege);

export default router;