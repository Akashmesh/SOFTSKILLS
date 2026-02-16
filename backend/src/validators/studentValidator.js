import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(3),
  class: z.string().min(1),
});
