import { Router } from "express";
import { validateSchema } from "../middlewares/SchemaValidator.js";
import signupSchema from "../schemas/SignupSchema.js";
import userController from "../controllers/AuthController.js";
import userMiddleware from "../middlewares/AuthMiddleware.js";

const authRouter = Router()

authRouter.post('/signin')
authRouter.post('/signup', validateSchema(signupSchema), userMiddleware.signupValidator, userController.createUser)

export { authRouter }