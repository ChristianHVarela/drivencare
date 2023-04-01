import service from '../services/MedicalAppointmentsService.js';

async function scheduleMedicalAppointments(req, res, next){
    const { doctor_id, patient_id, date, start_time } = req.body;
    try {
        await service.scheduleMedicalAppointments(doctor_id, patient_id, date, start_time);
        return res.status(201).send()
    } catch (error) {
        next(error);
    }
}

export default { scheduleMedicalAppointments }