import bcrypt from "bcryptjs"
import { User } from "../models/User.js"
import { generateToken } from "../utils/generateToken.js"
import { loginSchema, registerAdminSchema } from "../validators/authvalidator.js"

export const registerAdmin = async (req, res) => {
    try {
        const data = registerAdminSchema.parse(req.body);
        const existingAdmin = await User.findOne({role : "admin"});
        if(existingAdmin) {
            return res.status(400).json({message : "Admin already exists"});
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const admin = await User.create({
            username : data.username,
            passwordHash : hashedPassword,
            role : "admin"
        });
    } catch (error) {
        res.status(400).json({message : error.errors || error.message});
    }
}

export const loginUser = async(req, res) => {
    try {
        const data = loginSchema.parse(req.body);
        const user = await User.findOne({username : data.username});
        if(!user) {
            return res.status(400).json({message : "Invalid Credentials"});
        }

        const isMatch = await bcrypt.compare(data.password, user.passwordHash);
        if(!isMatch) {
            return res.status(400).json({message : "Invlid Credentials"});
        }
        res.json({
            token : generateToken(user),
            role : user.role,
        })
    } catch (error) {
        res.status(400).json({message : error.errors || error.message});
    }
}