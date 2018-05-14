const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const argv = process.argv.slice(2);
let query = '';
let message = 'Successfully updated!';

// node update <table_name> <id> <data>

if (argv[0] === 'politicians') {
  query = `UPDATE '${argv[0]}'
           SET name          = '${argv[2]}',
               party         = '${argv[3]}',
               location      = '${argv[4]}',
               grade_current = '${argv[5]}'
           WHERE id = ${parseInt(argv[1])}`
}

if (argv[0] === 'voters') {
  query = `UPDATE '${argv[0]}'
           SET first_name    = '${argv[2]}',
               last_name     = '${argv[3]}',
               gender        = '${argv[4]}',
               age           = '${argv[5]}'
           WHERE id = ${parseInt(argv[1])}`
}

if (argv[0] === 'votes') {
  query = `UPDATE '${argv[0]}'
           SET voterId          = '${argv[2]}',
               politicianId     = '${argv[3]}'
           WHERE id = ${parseInt(argv[1])}`
}

db.run(query, function(err) {
  if (err) throw err;
  console.log(message)
})