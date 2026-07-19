import {
  Schema,
  model,
  models,
  type Model,
  type Types,
} from "mongoose";

import {
  EmploymentType,
  ExperienceLevel,
} from "@/modules/jobs/types/job.types";

export interface JobDocument {
  title: string;
  company: string;
  location: string;
  description: string;
  salary: number;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  skills: string[];
  employer: Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<JobDocument>(
  {
    title: {
      type: String,
      required: [true, "Job title is required."],
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    company: {
      type: String,
      required: [true, "Company name is required."],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    location: {
      type: String,
      required: [true, "Location is required."],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    description: {
      type: String,
      required: [true, "Job description is required."],
      trim: true,
      minlength: 20,
      maxlength: 5000,
    },

    salary: {
      type: Number,
      required: [true, "Salary is required."],
      min: [1, "Salary must be greater than zero."],
      max: [100000000, "Enter a valid salary."],
    },

    employmentType: {
      type: String,
      enum: Object.values(EmploymentType),
      required: [true, "Employment type is required."],
    },

    experienceLevel: {
      type: String,
      enum: Object.values(ExperienceLevel),
      required: [true, "Experience level is required."],
    },

    skills: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      default: [],
    },

    employer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Employer is required."],
      index: true,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

JobSchema.index({
  employer: 1,
  createdAt: -1,
});

JobSchema.index({
  isActive: 1,
  createdAt: -1,
});

const Job =
  (models.Job as Model<JobDocument>) ||
  model<JobDocument>("Job", JobSchema);

export default Job;