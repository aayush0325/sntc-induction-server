import { Hono } from "hono";
import { users } from "../schema";
import { getAuth } from "@hono/clerk-auth";
import { drizzle } from "drizzle-orm/d1";

type Bindings = {
  DB: D1Database;
};

const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.get('/', (c) => {
  return c.json({
    msg: 'user router working'
  });
});

userRouter.post('/signup', async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json({
      msg: 'you are not logged in'
    });
  }

  const userId = c.req.header('Authorization')?.split(' ')[1];
  if (!userId) {
    return c.json({
      msg: 'Invalid Authorization header'
    });
  }

  const db = drizzle(c.env.DB);
  try {
    const result = await db.insert(users).values({ userId }).run();
    return c.json(result);
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return c.json({
      msg: 'Error inserting user',
      error: errorMessage
    });
  }
});

export default userRouter;
