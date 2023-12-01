import { z } from "zod";

export const registerUserSchema = z.object({
  name: z
    .string({ required_error: "A name is required" })
    .min(3, "name is required and should be at least 4 charachter long"),
  username: z
    .string({ required_error: "A username is required" })
    .min(4, "username must be at least 4 character long"),
  email: z
    .string({ required_error: "An email is required" })
    .email("Invalid string for email"),
  password: z
    .string({ required_error: " password field is required  " })
    .min(6, "Password must be at least 6 characters"),
  confirmation: z
    .string({ required_error: "Confirmation is required" })
    .min(6, "Password should match")
    .refine((data: any) => data.password === data.confirmation, {
      path: ["confirmation"],
      message: "Password does not match",
    }),
});
export const loginSchema = z.object({
  email: z
    .string({ required_error: "An email is required" })
    .email("Invalid string for email"),
  password: z
    .string({ required_error: " password field is required  " })
    .min(6, "Password must be at least 6 characters"),
});
