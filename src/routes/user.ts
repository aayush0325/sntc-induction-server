import { Hono } from "hono";
import { clubs,requestSchema } from "../zod/inputs";
import { clerkMiddleware,getAuth } from "@hono/clerk-auth";
const userRouter = new Hono();


userRouter.post('/signup',(c) => {
    //frontend to send signup request using clerk, the user is then to be added to db
    return c.json({})
})

userRouter.post('/:club',clerkMiddleware(), (c) => {

    const auth = getAuth(c);
    if(!auth?.userId){
        return c.json({
            msg:'u are not authenticated'
        })
    };

    const club = c.req.query('club');
    const clubIsCorrect = clubs.safeParse(club).success;
    if(!clubIsCorrect){
        return c.json({
            msg:'invalid url'
        });
    };
    return c.json({})
})

export default userRouter;