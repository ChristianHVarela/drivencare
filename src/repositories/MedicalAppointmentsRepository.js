import { db } from "../config/database.js"

async function verifyDateTime(searchQuery){
    return await db.query(`
        SELECT * FROM medical_appointments WHERE doctor_id = $1 AND date = $2 AND $3 BETWEEN start_time AND end_time
    `, searchQuery);
}

async function insertMedicalAppointment(insertSearch){
    await db.query(`
        INSERT INTO medical_appointments(doctor_id, patient_id, date, start_time, end_time) VALUES ($1, $2, $3, $4, $5)
    `, insertSearch)
}


export default { verifyDateTime, insertMedicalAppointment }