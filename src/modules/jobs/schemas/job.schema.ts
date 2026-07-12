import { z } from "zod";

import {
  EmploymentType,
  ExperienceLevel,
} from "@/database/models/Job";

export const createJobSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required"),

  location: z
    .string()
    .trim()
    .min(2, "Location is required"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),

  salary: z
    .number()
    .positive("Salary must be greater than zero"),

  employmentType: z.nativeEnum(EmploymentType),

  experienceLevel: z.nativeEnum(ExperienceLevel),

  skills: z.array(z.string()).default([]),
});

export type CreateJobSchema = z.infer<typeof createJobSchema>;