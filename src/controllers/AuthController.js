import httpStatus from "http-status"
import authService from "../services/AuthService.js"

async function createUser(req, res, next){
    const { name, email, password, type, speciality, localization } = req.body
    try {
        await authService.createUser(name, email, password, type, speciality, localization)
        return res.status(httpStatus.CREATED).send()
    } catch (error) {
        console.log(error);
        next(error)
    }
}

async function login(req, res, next){
    const { email, password } = req.body
    try {
        const token = await authService.generateToken(email, password)
        return res.send({token: token})
    } catch (error) {
        next(error)
    }
}

export default { createUser, login }