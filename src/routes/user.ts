import { Hono } from "hono";
import { clubs } from "../zod/inputs";

const userRouter = new Hono();

userRouter.post('/signup', async (c) => {

});

userRouter.post('/:club', async (c) => {





  const club = c.req.param('club');
  const clubIsCorrect = clubs.safeParse(club).success;
  if (!clubIsCorrect) {
    return c.json({
      msg: 'invalid url'
    });
  }



  // try {
  //   const statement = c.env.DB.prepare(`SELECT ${club} FROM user WHERE id = ?`);
  //   const result = await statement.bind(userId).first();
  //   if (result && result[club]) {
  //     return c.json({ msg: 'user has already visited' });
  //   } else {
  //     const updateStatement = c.env.DB.prepare(`UPDATE user SET ${club} = true WHERE id = ?`);
  //     await updateStatement.bind(userId).run();
  //     return c.json({ msg: 'user has been added to the club' });
  //   }
  // } catch (error) {
  //   console.error('Database query failed:', error);
  //   return c.json({ msg: 'internal server error' });
  // }
});

export default userRouter;
