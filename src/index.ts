import { Hono } from "hono"

// This ensures c.env.DB is correctly typed
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", async (c) => {
  return c.json({ message: "Hello, World!" });
});