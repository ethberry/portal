import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(254, "Email is too long"),
});

export type SubscribeFormValues = z.infer<typeof subscribeSchema>;
