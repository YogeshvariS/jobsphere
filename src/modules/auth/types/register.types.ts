import { UserRole } from "./user.types";

export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}