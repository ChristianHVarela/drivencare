import Joi from 'joi'

const signupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    type: Joi.string().valid('DOCTOR', 'PATIENT').required(),
    speciality: Joi.string().valid('OPHTHALMOLOGY', 'PEDIATRICS', 'CARDIOLOGY',
    'DERMATOLOGY', 'GYNECOLOGY_AND_OBSTETRICS', 'UROLOGY','GENERAL_PRACTICE')
})

export default signupSchema