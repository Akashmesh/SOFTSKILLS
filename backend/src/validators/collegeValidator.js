import { z } from "zod";

export const createCollegeSchema = z.object({
  collegeName: z.string().min(3),
  collegeCode: z.string().min(2),
  username: z.string().min(3),
  password: z.string().min(6),
});
