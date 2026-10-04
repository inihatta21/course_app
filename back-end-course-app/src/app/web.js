import express from "express"
import { authRouter } from "../routes/auth-route.js"
import { errorMiddleware } from "../middleware/error-middleware.js"
import { authMiddleware } from "../middleware/auth-middleware.js"
import { logoutRouter } from "../routes/logout-route.js"
import { courseRouter } from "../routes/course-route.js"


export const web = express()

web.use(express.json())
web.use(authRouter)
web.use(authMiddleware)
web.use(courseRouter)
web.use(logoutRouter)
web.use(errorMiddleware)