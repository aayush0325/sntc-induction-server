import { Hono } from "hono";
import { clubs } from "../zod/inputs";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const userRouter = new Hono();

userRouter.post('/signup', async (c) => {
  // frontend to send signup request using clerk, the user is then to be added to db
  return c.json({});
});

userRouter.post('/:club', clerkMiddleware(), async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json({
      msg: 'you are not authenticated'
    });
  }

  const club = c.req.param('club');
  const clubIsCorrect = clubs.safeParse(club).success;
  if (!clubIsCorrect) {
    return c.json({
      msg: 'invalid url'
    });
  }

  const userId = auth.userId;


  try {
    const statement = c.env.DB.prepare(`SELECT ${club} FROM user WHERE id = ?`);
    const result = await statement.bind(userId).first();
    if (result && result[club]) {
      return c.json({ msg: 'user has already visited' });
    } else {
      const updateStatement = c.env.DB.prepare(`UPDATE user SET ${club} = true WHERE id = ?`);
      await updateStatement.bind(userId).run();
      return c.json({ msg: 'user has been added to the club' });
    }
  } catch (error) {
    console.error('Database query failed:', error);
    return c.json({ msg: 'internal server error' });
  }
});

export default userRouter;
