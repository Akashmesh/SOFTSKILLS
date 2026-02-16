import bcrypt from "bcryptjs";
import { College } from "../models/College.js";
import { User } from "../models/User.js";
import { createCollegeSchema } from "../validators/collegeValidator.js";

export const createCollege = async (req, res) => {
  try {
    const data = createCollegeSchema.parse(req.body);

    // Check if username already exists
    const existingUser = await User.findOne({ username: data.username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Check if college code exists
    const existingCollege = await College.findOne({ collegeCode: data.collegeCode });
    if (existingCollege) {
      return res.status(400).json({ message: "College code already exists" });
    }

    // Create College
    const college = await College.create({
      collegeName: data.collegeName,
      collegeCode: data.collegeCode,
    });

    // Hash Password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create User
    await User.create({
      username: data.username,
      passwordHash: hashedPassword,
      role: "college",
      collegeId: college._id,
    });

    res.status(201).json({
      message: "College user created successfully",
      college,
    });
  } catch (error) {
    res.status(400).json({ message: error.errors || error.message });
  }
};
