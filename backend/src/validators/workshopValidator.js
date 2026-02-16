import { z } from "zod";

export const workshopSchema = z.object({
  fromDate: z.string(),
  toDate: z.string(),
});
