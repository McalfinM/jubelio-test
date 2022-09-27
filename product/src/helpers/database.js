const { Client, Pool } = require("pg");
const dotenv = require('dotenv')
dotenv.config()


const client = new Client({
  password: process.env.DBPASSWORD || '123456789',
  user: process.env.DBUSER || 'postgres',
  host:  process.env.DBHOST || 'localhost',
  port: process.env.DBPORT || 5432
});


// const client = new Client({
//   password: '123456789',
//   user: 'postgres',
//   host:  'localhost',
//   database: 'jubelio',
//   database: 'testing' << untuk testing
// });


const pool = new Pool({
  database: 'testing',
  user: 'postgres',
  password: '123456789',
  port: 5432,
  max:1
})

module.exports = {client,pool}