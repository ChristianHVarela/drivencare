import httpStatus from "http-status"
import authService from "../services/AuthService.js"

async function createUser(req, res){
    const { name, email, password, type, speciality } = req.body
    try {
        await authService.createUser(name, email, password, type, speciality)
        return res.status(httpStatus.CREATED).send()
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: error.message})
    }
}

async function login(req, res){
    const { email, password } = req.body
    try {
        const token = await authService.generateToken(email, password)
        return res.send({token: token})
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: error.message})
    }
}

export default { createUser, login }