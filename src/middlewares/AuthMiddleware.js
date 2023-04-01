import userRepository from "../repositories/UsersRepository.js";
import errors from '../errors/index.js';
import jwt from 'jsonwebtoken';
import authService from '../services/AuthService.js';

async function signupValidator(req, res, next){
    const { email } = req.body
    try {
        const { rowCount } = await userRepository.findByEmail(email)
        if (rowCount > 0){
            throw errors.duplicatedEmailError(email);
        }
        next();
    } catch (error) {
        console.log(error);
        next(error)
    }
}

async function validateToken(req, res, next){
    const { authorization } = req.headers;
    if (!authorization) throw errors.unauthorizedError();
    const parts = authorization.split(" ");
    if (parts.length !== 2) throw errors.unauthorizedError();
    const [schema, token] = parts;
    if (schema !== "Bearer") throw errors.unauthorizedError();
    try {
        const secretKey = await authService.findSecretKey();
        const { userId, email } = jwt.verify(token, secretKey);
        res.locals.user = { user_id: userId, email }
        next()
    } catch (error) {
        throw errors.unauthorizedError();
    }

}

export default { signupValidator, validateToken }