import { db } from "../config/database.js"

async function createDoctor(insertQuery){
    await db.query(`
        INSERT INTO doctors(user_id, specialily) VALUES ($1, $2)
    `, insertQuery)
}

export default { createDoctor }