import { Router } from "express";
import { validateSchema } from "../middlewares/SchemaValidator.js";
import signupSchema from "../schemas/SignupSchema.js";
import signinSchema from "../schemas/SigninSchema.js";
import authController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";

const authRouter = Router()

authRouter.post('/signin', validateSchema(signinSchema), authController.login)
authRouter.post('/signup', validateSchema(signupSchema), authMiddleware.signupValidator, authController.createUser)

export { authRouter }