import { Hono } from "hono"
import { clerkMiddleware } from "@hono/clerk-auth";
import { cors } from "hono/cors";
import userRouter from "./routes/user";
import clubRouter from "./routes/clubs";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('/api/v1/*',cors())

app.use(clerkMiddleware());
app.route('/api/v1/users',userRouter);
app.route('/api/v1/clubs',clubRouter);

export default app;