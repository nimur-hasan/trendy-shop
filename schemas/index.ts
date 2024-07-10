import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const NewProductSchema = z.object({
  product_name: z.string().min(1, { message: "Email is required" }),
});
