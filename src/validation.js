const jwt = require('jsonwebtoken');

const SECRET = 'HOLA';

const verifyToken = token => {
    try{
        return jwt.verify(token, SECRET);
    }catch (e){
        console.log(e);
        throw new Error('Token inválido');
    }
}

module.exports = {
    verify: verifyToken
}
