import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";
import { uploadExcel } from "../controllers/excelController.js";

const router = express.Router();
router.post(
  "/upload/:workshopId",
  protect,
  authorizeRoles("admin"),
  upload.single("file"),
  uploadExcel
);
export default router;
