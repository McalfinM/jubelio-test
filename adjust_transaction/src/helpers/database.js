const { Client, Pool } = require("pg");
const dotenv = require('dotenv')
dotenv.config()

console.log({
  password: process.env.DBPASSWORD,
  user: process.env.DBUSER,
  host:  process.env.DBHOST,
  port: process.env.DBPORT
})

const client = new Client({
  password: process.env.DBPASSWORD || '123456789',
  user: process.env.DBUSER || 'postgres',
  host:  process.env.DBHOST || 'localhost',
  port: process.env.DBPORT
});

// const client = new Client({
//   password: '123456789',
//   user: 'postgres',
//   host:  'localhost',
//   database: 'adjusment_transactions'
//   // database: 'testing' << for testing
// });

const pool = new Pool({
  database: 'testing',
  user: 'postgres',
  password: '123456789',
  port: 5432,
})

module.exports = {client,pool}