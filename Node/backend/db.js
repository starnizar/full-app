const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'macintosh',
  password: '1111',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres'
});

module.exports = pool;