const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const argv = process.argv.slice(2);

// node delete <tablename> <id>
let query = `DELETE FROM '${argv[0]}' WHERE id = ${parseInt(argv[1])}`
let message = 'Row deleted!';

db.run(query, function(err) {
  if (err) throw err;
  console.log(message)
})

