export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
  role: "JOB_SEEKER" | "EMPLOYER";
}