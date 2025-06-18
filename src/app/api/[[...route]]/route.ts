import authRoute from '@/modules/auth/server/route';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api').route('/auth', authRoute);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof app;
