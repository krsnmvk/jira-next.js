import * as z from 'zod';
import { signinInsertSchema } from './sign-in-schema';

export const signupInsertSchema = signinInsertSchema
  .extend({
    name: z.string().min(3).trim(),
    confirmPassword: z.string().min(3),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPassword'],
  });

export type SignUpInsertSchema = z.infer<typeof signupInsertSchema>;
