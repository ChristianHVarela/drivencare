import repository from '../repositories/DoctorsRepository.js';

async function findAll(name, speciality, localization, page, limit){
    const { rows } = await repository.findAll([name, speciality, localization, page ? page : 0, limit ? limit : 50]);
    return rows;
}

export default { findAll }