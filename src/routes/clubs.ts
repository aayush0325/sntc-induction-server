import { Hono } from "hono";
import { users } from "../schema";
import { getAuth } from "@hono/clerk-auth";
import { drizzle } from "drizzle-orm/d1";
import { clubs } from "../zod/inputvalidation";
import { eq, lt, gte, ne } from 'drizzle-orm';

type Bindings = {
    DB: D1Database;
};

const clubRouter = new Hono<{ Bindings: Bindings }>();

clubRouter.post('/:club', async (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) {
        return c.json({
            msg: 'you are not logged in'
        });
    }

    const club = c.req.param('club');
    const urlIsCorrect = clubs.safeParse(club).success;
    if (!urlIsCorrect) {
        return c.json({
            msg: 'invalid url'
        });
    }

    const db = drizzle(c.env.DB);
    const user = await db.select().from(users).where(eq(users.userId, auth.userId));
    
    if (user.length === 0) {
        return c.json({
            msg: 'user not found'
        });
    }

    type User = {
        userId: string;
        [key: string]: boolean | string;
    };

    const currentUser = user[0] as User;

    if (currentUser[club]) {
        return c.json({
            msg: `user has already visited this club`
        });
    }

    const updatedUser = await db.update(users)
        .set({ [club]: true })
        .where(eq(users.userId, auth.userId))
        .returning();

    return c.json({ updatedUser }); 
});

export default clubRouter;