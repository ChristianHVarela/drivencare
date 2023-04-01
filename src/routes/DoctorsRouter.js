import { Router } from 'express';
import authMiddleware from '../middlewares/AuthMiddleware.js';

const doctorsRouter = Router()

doctorsRouter.get('/', authMiddleware.validateToken)

export { doctorsRouter }