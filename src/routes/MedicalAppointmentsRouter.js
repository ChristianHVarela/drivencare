import { Router } from 'express';
import { validateSchema } from '../middlewares/SchemaValidator.js';
import { scheduleMedicalAppointmentsSchema } from '../schemas/ScheduleMedicalAppointments.js';
import medicalAppointmentsMiddleware from '../middlewares/MedicalAppointmentsMiddleware.js';
import authMiddleware from '../middlewares/AuthMiddleware.js';
import medicalAppointmentsController from '../controllers/MedicalAppointmentsController.js';

const medicalAppointmentsRouter = Router()

medicalAppointmentsRouter.post('/', authMiddleware.validateToken, validateSchema(scheduleMedicalAppointmentsSchema), 
                    medicalAppointmentsMiddleware.validateScheduleMedicalAppointments, medicalAppointmentsController.scheduleMedicalAppointments);

export { medicalAppointmentsRouter }