import httpStatus from "http-status";
import userRepository from "../repositories/UsersRepository.js";

async function signupValidator(req, res, next){
    const { email } = req.body
    try {
        const { rowCount } = await userRepository.findByEmail(email)
        if (rowCount > 0){
            return res.status(httpStatus.CONFLICT).send({error: "There is already an user with given email"})
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: error.message})
    }
    next();
}

export default { signupValidator }