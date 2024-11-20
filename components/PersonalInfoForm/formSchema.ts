import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3, "Min of 3 characters"),
  lastName: z.string(),
  phone: z.string(),
});

export type FormData = z.infer<typeof formSchema>;

export const propertyFormSchema = z.object({
  propertyType: z.string(),
  numberOfOccupants: z.number(),
});

export type PropertyFormData = z.infer<typeof propertyFormSchema>;
