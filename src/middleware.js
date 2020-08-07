const validator = require('./validation');

const jwtMiddleware = async (req, res, next) => {
    try{
        const authorization = req.get('Authorization');
        if(authorization === undefined){
            throw new Error('Debe proporcionar una autentificacion');
        }
        const [bearer, token] = authorization.split(' ');
        if(!bearer.includes('Bearer')){
            throw new Error('Metodo de autentificacion invalido');
        }
        const userData = await validator.verify(token);
        req.userData = userData;
        req.token = token;

        next();
    }catch (e){
        res.status(401).send(e);
    }
}

module.exports = {
    middleware: jwtMiddleware
}
