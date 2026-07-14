import Job from "@/database/models/Job";
import { CreateJobSchema } from "../schemas/job.schema";

export async function createJob(
  data: CreateJobSchema,
  employerId: string
) {
  const job = await Job.create({
    ...data,
    employer: employerId,
  });

  return job;
}

export async function getAllJobs() {
  return Job.find()
    .populate("employer", "name email")
    .sort({
      createdAt: -1,
    });
}

export async function getJobById(id: string) {
  return Job.findById(id).populate(
    "employer",
    "name email"
  );
}