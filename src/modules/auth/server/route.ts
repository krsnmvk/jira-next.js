import * as z from 'zod';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';

const authRoute = new Hono()
  .post(
    '/register',
    zValidator(
      'json',
      z.object({
        name: z.string().min(3).trim(),
        email: z.string().email(),
        password: z.string().min(6).trim(),
      })
    ),
    async (c) => {
      const { name, email, password } = c.req.valid('json');

      return c.json({ name, email, password });
    }
  )
  .post(
    '/login',
    zValidator(
      'json',
      z.object({
        email: z.string().email(),
        password: z.string().min(6).trim(),
      })
    ),
    async (c) => {
      const { email, password } = c.req.valid('json');

      return c.json({ email, password });
    }
  );

export default authRoute;
