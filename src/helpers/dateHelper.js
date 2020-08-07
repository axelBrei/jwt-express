const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

const newDate = () => dayjs().utc();

module.exports = {
    newDate
}
