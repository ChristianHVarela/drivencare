import doctorsRepository from '../repositories/DoctorsRepository.js';
import patientsRepository from '../repositories/PatientsRepository.js';
import medicalAppointmentsRepository from "../repositories/MedicalAppointmentsRepository.js";
import errors from '../errors/index.js';

async function validateScheduleMedicalAppointments(req, res, next){
    const { doctor_id, patient_id, date, start_time } = req.body
    try {
        const doctorResult = await doctorsRepository.findById([doctor_id]);
        if (doctorResult.rowCount === 0) throw errors.medicalAppointmentsError("Doctor Not Found!");
        const patientResult = await patientsRepository.findById([patient_id]);
        if (patientResult.rowCount === 0) throw errors.medicalAppointmentsError("Patient Not Found!");
        const { rowCount } = await medicalAppointmentsRepository.verifyDateTime([doctor_id, date, start_time]);
        if (rowCount > 0) throw errors.medicalAppointmentsError("Appointment not available at this time. Please choose a different time or date!");
        next();
    } catch (error) {
        next(error);    
    }
}

export default { validateScheduleMedicalAppointments }