import { db } from "../config/database.js"

async function createPatient(insertQuery){
    await db.query(`
        INSERT INTO patients(user_id) VALUES ($1)
    `, insertQuery)
}

async function findById(searchQuery){
    return await db.query(`
        SELECT * FROM patients WHERE id = $1
    `, searchQuery)
}

export default { createPatient, findById }
