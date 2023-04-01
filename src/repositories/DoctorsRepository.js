import { db } from "../config/database.js"

async function createDoctor(insertQuery){
    await db.query(`
        INSERT INTO doctors(user_id, specialily, localization) VALUES ($1, $2, $3)
    `, insertQuery);
}

async function findAll(searchQuery){
    console.log(searchQuery);
    return await db.query(`
        SELECT u.name AS name, d.specialily AS speciality, d.localization AS localization, d.created_at AS creation_date 
        FROM doctors d JOIN users u ON u.id = d.user_id WHERE UPPER(u.name) LIKE CONCAT('%', COALESCE(UPPER($1), ''), '%') AND 
        CAST(d.specialily AS text) LIKE CONCAT('%', COALESCE($2, ''), '%') AND UPPER(d.localization) LIKE CONCAT('%', COALESCE(UPPER($3), ''), '%') 
        ORDER BY u.name ASC OFFSET $4 LIMIT $5
    `, searchQuery);
}

async function findById(searchQuery){
    return await db.query(`
        SELECT * FROM doctors WHERE id = $1
    `, searchQuery)
}

export default { createDoctor, findAll, findById }


        