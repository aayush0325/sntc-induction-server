import { Hono } from "hono";
import userRouter from "./routes/user";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => {
  return c.json({
    msg:'reached backend'
  })
})

app.route('/api/v1/users',userRouter)

export default app;
