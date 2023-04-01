import userRepository from "../repositories/UsersRepository.js";
import errors from '../errors/index.js'

async function signupValidator(req, res, next){
    const { email } = req.body
    try {
        const { rowCount } = await userRepository.findByEmail(email)
        if (rowCount > 0){
            throw errors.duplicatedEmailError(email);
        }
        next();
    } catch (error) {
        next(error)
    }
}

export default { signupValidator }