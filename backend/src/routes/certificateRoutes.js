import express from "express";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";
import { generateCertificate } from "../controllers/certificateController.js";

const router = express.Router();

router.get(
  "/:studentId",
  protect,
  authorizeRoles("admin"),
  generateCertificate
);

export default router;
