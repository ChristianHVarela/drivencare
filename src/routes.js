import { Router } from "express";
import { authRouter } from "./routes/AuthRouter.js";

const routes = Router()

routes.use('/auth', authRouter)

export { routes }
