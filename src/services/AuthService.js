import userRepository from "../repositories/UsersRepository.js";
import doctorRepository from "../repositories/DoctorsRepository.js";
import patientRepository from "../repositories/PatientsRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import errors from '../errors/index.js'

async function createUser(name, email, password, type, speciality, localization){
    const passwordEncrypted = await bcrypt.hash(password, 10)
    await userRepository.createUser([name, email, passwordEncrypted])
    const { rows: [user] } = await userRepository.findByEmail(email)
    if (type === 'DOCTOR'){
        await createDoctor(user.id, speciality, localization)
    } else {
        await createPatient(user.id)
    }
}

async function createDoctor(user_id, speciality, localization){
    await doctorRepository.createDoctor([user_id, speciality, localization])
}

async function createPatient(user_id){
    await patientRepository.createPatient([user_id])
}

async function generateToken(email, password){
    const { rows: [user], rowCount } = await userRepository.findByEmail(email)
    if (!rowCount) errors.invalidCredentialsError()
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) throw errors.invalidCredentialsError()
    const secretKey = await findSecretKey()
    const token = jwt.sign({userId: user.id, email}, secretKey, { expiresIn: '3h' })
    return token
}

async function findSecretKey(){
    const secretKey = process.env.SECRET_KEY
    if (!secretKey){
        throw errors.notFoundError();
    }
    return secretKey
}

export default { createUser, generateToken, findSecretKey }