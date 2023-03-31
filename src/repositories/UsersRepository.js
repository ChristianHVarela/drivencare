import { db } from "../config/database.js"

async function findByEmail(email){
    return await db.query(`
        SELECT * FROM users WHERE email LIKE $1
    `, [email])
}

async function createUser(insertQuery){
    await db.query(`
        INSERT INTO users(name, email, password) VALUES ($1, $2, $3)
    `, insertQuery)
}

export default { findByEmail, createUser }