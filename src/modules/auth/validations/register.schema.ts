import { z } from "zod";
import { UserRole } from "../types/user.types";

export const registerSchema = z.object({
  name: z.string().min(2),

  email: z.string().email(),

  password: z.string().min(8),

  role: z.nativeEnum(UserRole),
});

export type RegisterSchemaType =
  z.infer<typeof registerSchema>;