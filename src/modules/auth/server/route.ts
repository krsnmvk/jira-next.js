import * as z from 'zod';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { createAdminClient } from '@/lib/appwrite';
import { ID } from 'node-appwrite';
import { setCookie } from 'hono/cookie';
import { AUTH_COOKIE } from '../constant';

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

      const { account } = createAdminClient();

      await account.create(ID.unique(), email, password, name);

      const session = await account.createEmailPasswordSession(email, password);

      setCookie(c, AUTH_COOKIE, session.secret, {
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      });

      return c.json({ success: true, message: 'OK' });
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

      const { account } = createAdminClient();

      const session = await account.createEmailPasswordSession(email, password);

      setCookie(c, AUTH_COOKIE, session.secret, {
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      });

      return c.json({ success: true, message: 'OK' });
    }
  );

export default authRoute;
