import { Router } from 'express';
import authMiddleware from '../middlewares/AuthMiddleware.js';
import controller from '../controllers/DoctorsController.js';

const doctorsRouter = Router()

doctorsRouter.get('/', authMiddleware.validateToken, controller.findAll)

export { doctorsRouter }