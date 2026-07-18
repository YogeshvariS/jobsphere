export enum EmploymentType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  INTERNSHIP = "INTERNSHIP",
  CONTRACT = "CONTRACT",
  FREELANCE = "FREELANCE",
}

export enum ExperienceLevel {
  FRESHER = "FRESHER",
  JUNIOR = "JUNIOR",
  MID_LEVEL = "MID_LEVEL",
  SENIOR = "SENIOR",
}

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