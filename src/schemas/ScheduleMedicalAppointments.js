import Joi from 'joi';

const scheduleMedicalAppointmentsSchema = Joi.object({
    doctor_id: Joi.number().required(),
    patient_id: Joi.number().required(),
    date: Joi.date().required(),
    start_time: Joi.string().regex(/^\d{2}:\d{2}$/).required()
})

export { scheduleMedicalAppointmentsSchema }