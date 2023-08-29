const Pool = require("pg").Pool;
const pool = new Pool({
    user:'user',
    host:'localhost',
    database:'motorway',
    password:'password',
    port:'5433' //default port
});

module.exports = pool;