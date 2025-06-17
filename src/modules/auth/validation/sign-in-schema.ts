import * as z from 'zod';

export const signinInsertSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).trim(),
});

export type SignInInsertSchema = z.infer<typeof signinInsertSchema>;
