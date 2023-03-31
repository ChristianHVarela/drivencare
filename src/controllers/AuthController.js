import httpStatus from "http-status"
import userService from "../services/AuthService.js"

async function createUser(req, res){
    const { name, email, password, type, speciality } = req.body
    try {
        await userService.createUser(name, email, password, type, speciality)
        return res.status(httpStatus.CREATED).send()
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: error.message})
    }
}

export default { createUser }