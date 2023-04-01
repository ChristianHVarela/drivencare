import { db } from "../config/database.js"

async function verifyDateTime(searchQuery){
    return await db.query(`
        SELECT * FROM medical_appointments WHERE doctor_id = $1 AND date = $2 AND $3 BETWEEN start_time AND end_time
    `, searchQuery);
}


export default { verifyDateTime }