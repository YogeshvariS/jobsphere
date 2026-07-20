import { z } from "zod";

import {
  EmploymentType,
  ExperienceLevel,
} from "@/modules/jobs/types/job.types";

export const createJobSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required")
    .max(100, "Company name cannot exceed 100 characters"),

  location: z
    .string()
    .trim()
    .min(2, "Location is required")
    .max(100, "Location cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(5000, "Description cannot exceed 5000 characters"),

  salary: z
    .number({
      message: "Salary is required",
    })
    .positive("Salary must be greater than zero")
    .max(100000000, "Enter a valid salary"),

  employmentType: z.nativeEnum(EmploymentType, {
    message: "Select an employment type",
  }),

  experienceLevel: z.nativeEnum(ExperienceLevel, {
    message: "Select an experience level",
  }),

  skills: z
    .array(
      z
        .string()
        .trim()
        .min(1, "Skill cannot be empty")
    )
    .max(15, "You can add up to 15 skills")
    .default([]),
});

/**
 * Values accepted by the schema before Zod applies
 * defaults and transformations.
 */
export type CreateJobFormInput = z.input<
  typeof createJobSchema
>;

/**
 * Validated values returned after Zod parsing.
 */
export type CreateJobSchema = z.output<
  typeof createJobSchema
>;