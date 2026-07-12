import {
  EmploymentType,
  ExperienceLevel,
} from "@/database/models/Job";

export interface CreateJobInput {
  title: string;
  company: string;
  location: string;
  description: string;
  salary: number;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  skills: string[];
}