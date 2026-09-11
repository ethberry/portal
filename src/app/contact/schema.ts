import { z } from "zod";

export const budgetValues = ["under-10k", "10k-25k", "25k-50k", "50k-plus", "not-sure"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(254, "Email is too long"),
  company: z.string().trim().max(120, "Company name is too long"),
  budget: z.enum(budgetValues).or(z.literal("")),
  message: z.string().trim().min(20, "Tell us a little more about your project").max(4000, "Message is too long"),
  website: z.string().max(0),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
