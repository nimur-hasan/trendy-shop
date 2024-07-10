import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const NewProductSchema = z.object({
  product_name: z.string().min(1, { message: "Product name is required" }),
  product_description: z.string({ message: "Product description is required" }),
  gender: z.string({ message: "Gender is required" }).optional(),
  base_price: z.string({ message: "Base price is required" }),
  stock: z.string({ message: "Stock is required" }),
  discount: z.string().optional(),
  discount_type: z.string().optional(),
  category: z.string().optional(),
});
