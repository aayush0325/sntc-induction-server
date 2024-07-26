import { Hono } from "hono"
import { drizzle } from "drizzle-orm/d1";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { users } from "./schema";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(clerkMiddleware());

app.get('/', (c) => {
  const auth = getAuth(c)

  if (!auth?.userId) {
    return c.json({
      message: 'You are not logged in.',
    })
  }

  return c.json({
    message: 'You are logged in!',
    userId: auth.userId,
  })
})

app.get("/users", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(users).all();
  return c.json(result);
});

app.post("/users", async (c) => {
  const db = drizzle(c.env.DB);
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: 'You are not logged in.',
    })
  }

  const result = await db.insert(users).values({
    userId: auth.userId,
    clubs: "[]",
  }).run();
  
  return c.json(result);
}
);

export default app;