const jwt = require('jsonwebtoken');
const { newDate } = require('./helpers/dateHelper');

const SECRET = 'HOLA';
const EXPIRATION_TTL = 5 // HOURS

const generateToken = async (userId, payload) => {
    try{
        const today = newDate();
        return await jwt.sign({
            id: userId,
            ...payload,
            iat: today.valueOf(),
            exp: today.add(EXPIRATION_TTL, 'hour').valueOf(),
        }, SECRET);
    }catch (e){
        console.log(e);
        throw new Error('Error al generar el token');
    }
}

module.exports = {
    generate: generateToken
}
