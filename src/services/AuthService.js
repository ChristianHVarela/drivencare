import userRepository from "../repositories/UsersRepository.js";
import doctorRepository from "../repositories/DoctorRepository.js";
import patientRepository from "../repositories/PatientRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(name, email, password, type, speciality){
    try {
        const passwordEncrypted = await bcrypt.hash(password, 10)
        await userRepository.createUser([name, email, passwordEncrypted])
        const { rows: [user] } = await userRepository.findByEmail(email)
        if (type === 'DOCTOR'){
            await createDoctor(user.id, speciality)
        } else {
            await createPatient(user.id)
        }
    } catch (error) {
        throw new Error("Internal Server Error")
    }
}

async function createDoctor(user_id, speciality){
    try {
        await doctorRepository.createDoctor([user_id, speciality])
    } catch (error) {
        throw new Error("Internal Server Error")
    }
}

async function createPatient(user_id){
    try {
        await patientRepository.createPatient([user_id])
    } catch (error) {
        throw new Error("Internal Server Error")
    }
}

async function generateToken(email, password){
    try {
        const { rows: [user] } = await userRepository.findByEmail(email)
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword){
            throw new Error("Email or password are incorrect")
        }
        const secretKey = await findSecretKey()
        const token = jwt.sign({userId: user.id, email}, secretKey, { expiresIn: '3h' })
        return token
    } catch (error) {
        throw new Error("Internal Server Error")
    }
}

async function findSecretKey(){
    const secretKey = process.env.SECRET_KEY
    if (!secretKey){
        throw new Error("Secret Key not found")
    }
    return secretKey
}

export default { createUser, generateToken }