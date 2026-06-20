import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .email("Invalid email address")
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  role: z.enum(["JOB_SEEKER", "EMPLOYER"]),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;