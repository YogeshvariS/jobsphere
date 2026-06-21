import mongoose, { Model, Schema } from "mongoose";
import { IUser, UserRole } from "@/modules/auth/types/user.types";

const UserSchema = new Schema<IUser>(
{
name: {
type: String,
required: true,
trim: true,
},

email: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
},
password: {
  type: String,
},

image: {
  type: String,
},

role: {
  type: String,
  enum: Object.values(UserRole),
  default: UserRole.JOB_SEEKER,
},

resumeUrl: {
  type: String,
},

},
{
timestamps: true,
}
);

const User =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default User;
