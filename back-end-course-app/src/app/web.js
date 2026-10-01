import express from "express"
import { authRouter } from "../routes/auth-route.js"
import { errorMiddleware } from "../middleware/error-middleware.js"

export const web = express()

web.use(express.json())
web.use(authRouter)
web.use(errorMiddleware)