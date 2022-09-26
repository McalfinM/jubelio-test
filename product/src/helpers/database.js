const { Client, Pool } = require("pg");
const dotenv = require('dotenv')
dotenv.config()


const client = new Client({
  password: process.env.DBPASSWORD,
  user: process.env.DBUSER,
  host:  process.env.DBHOST,
  port: process.env.DBPORT
});


// const client = new Client({
//   password: '123456789',
//   user: 'postgres',
//   host:  'localhost',
//   database: 'jubelio'
// });


const pool = new Pool({
  database: 'testing',
  user: 'postgres',
  password: '123456789',
  port: 5432,
  max:1
})

module.exports = {client,pool}