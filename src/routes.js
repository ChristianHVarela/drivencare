import { Router } from "express";
import { authRouter } from "./routes/AuthRouter.js";
import { doctorsRouter } from "./routes/DoctorsRouter.js";

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/doctors', doctorsRouter)

export { routes }
