import { Types } from "mongoose";

export enum UserRole {
  JOB_SEEKER = "JOB_SEEKER",
  EMPLOYER = "EMPLOYER",
}

export interface IUser {
    _id?: Types.ObjectId;
  name: string;
  email: string;
  password?: string;

  image?: string;

  role: UserRole;

  resumeUrl?: string;

  createdAt: Date;
  updatedAt: Date;
}