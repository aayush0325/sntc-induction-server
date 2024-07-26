import { createMiddleware } from "hono/factory"

const authMiddleware = createMiddleware(async (c, next) => {
    const userId = c.req.header('userId');
    if(!userId){
        return c.json({
            msg:'send proper headers'
        })
    }
  })