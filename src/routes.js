import { Router } from "express";
import { authRouter } from "./routes/AuthRouter.js";
import { doctorsRouter } from "./routes/DoctorsRouter.js";
import { medicalAppointmentsRouter } from "./routes/MedicalAppointmentsRouter.js";

const routes = Router()

routes.use('/auth', authRouter);
routes.use('/doctors', doctorsRouter);
routes.use('/medicalAppointments', medicalAppointmentsRouter);

export { routes }
