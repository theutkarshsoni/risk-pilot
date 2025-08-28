import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passportRegex = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/;

export const UboSchema = z.object({
  firstName: z.string().min(2, "First name too short"),
  lastName: z.string().min(2, "Last name too short"),
  email: z.string().regex(emailRegex, "Invalid email"),
});

export const ClientSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("person"),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().regex(emailRegex, "Invalid email"),
    passportNumber: z.string().regex(passportRegex, "Invalid passport"),
  }),
  z.object({
    type: z.literal("company"),
    companyName: z.string().min(2, "Company name too short"),
    registrationNumber: z.string().min(3, "Registration number too short"),
    ubos: z.array(UboSchema).min(1, "At least one UBO required"),
  }),
]);

export const DocumentChecklistSchema = z.object({
  proofOfIdentity: z.boolean(),
  proofOfAddress: z.boolean(),
  companyRegistration: z.boolean().optional(),
});

export const OnboardingSchema = z.object({
  client: ClientSchema,
  documents: DocumentChecklistSchema,
});

export type Ubo = z.infer<typeof UboSchema>;
export type Client = z.infer<typeof ClientSchema>;
export type DocumentChecklist = z.infer<typeof DocumentChecklistSchema>;
export type OnboardingPayload = z.infer<typeof OnboardingSchema>;
