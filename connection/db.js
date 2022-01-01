const { Pool } = require('pg')

const dbPool = new Pool({
  // database: 'personal_web_b29',
  // port: 5432,
  // user: 'postgres',
  // password: 'root',

  connectionString:
    'postgres://xfsvvfhvekexhr:6a63067bfb2fa032b14affed06e2c6e7cbe56d9dc98e1cd5f08bf76e50d1219a@ec2-52-72-252-211.compute-1.amazonaws.com:5432/d742f6hvr06c8l',
  ssl: {
    rejectUnauthorized: false,
  },
})

module.exports = dbPool
