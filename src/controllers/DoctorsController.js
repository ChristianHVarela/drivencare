import service from '../services/DoctorsService.js';

async function findAll(req, res, next){
    const { name, speciality, localization, page, limit } = req.query
    try {
        const doctors = await service.findAll(name, speciality, localization, page, limit)
        return res.send({doctors: doctors})
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default { findAll }