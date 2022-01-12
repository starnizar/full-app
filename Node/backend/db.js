const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'macintosh',
  password: 'iopoip',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres'
});

module.exports = pool;