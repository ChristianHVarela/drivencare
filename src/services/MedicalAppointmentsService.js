import repository from '../repositories/MedicalAppointmentsRepository.js';

async function scheduleMedicalAppointments(doctor_id, patient_id, date, start_time){
    const end_time = await findEndTime(date, start_time);
    await repository.insertMedicalAppointment([doctor_id, patient_id, date, start_time, end_time]);
}

async function findEndTime(date, start_time){
    const time = new Date(`${date}T${start_time}:00.000Z`);
    time.setHours(time.getHours() + 1);
    return time.toISOString().substr(11, 5);
}

export default { scheduleMedicalAppointments }