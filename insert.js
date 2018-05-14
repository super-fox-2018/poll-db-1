// const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const argv = process.argv.slice(2);
let query = '';
let message = '';
// node insert politicians name party location grade_current
//             voters      first last gender age
//             votes       voterId politicianId
if (argv[0] === 'politicians') {
  query = `INSERT INTO '${argv[0]}' (name, party, location, grade_current)
           VALUES ("${argv[1]}", "${argv[2]}", "${argv[3]}", "${argv[4]}")`;
  message = `name: ${argv[1]}, party: ${argv[2]}, location: ${argv[3]}, grade: ${argv[4]}`
}

if (argv[0] === 'voters') {
  query = `INSERT INTO '${argv[0]}' (first_name, last_name, gender, age)
           VALUES ("${argv[1]}", "${argv[2]}", "${argv[3]}", "${argv[4]}")`;
  message = `first_name: ${argv[1]}, last_name: ${argv[2]}, gender: ${argv[3]}, age: ${argv[4]}`
}

if (argv[0] === 'votes') {
  query = `INSERT INTO '${argv[0]}' (voterId, politicianId)
           VALUES ("${argv[1]}", "${argv[2]}")`;
  message = `voterId: ${argv[1]}, politicianId: ${argv[2]}`;
}

db.run(query, function(err) {
  if (err) throw err;
  console.log(`Successfully created a new row`);
  console.log(message)
})
