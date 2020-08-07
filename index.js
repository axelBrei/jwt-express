const generator = require('./src/generation');
const validator = require('./src/validation');
const middleware = require('./src/middleware');

module.exports = {
    ...generator,
    ...validator,
    ...middleware
}
