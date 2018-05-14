const db = require('./setup');
const args = process.argv.slice(2);

if (args[0] === 'politicians') {
  const query = `INSERT INTO politicians (name, party, locations,grade_current)
               VALUES ('${args[1]}', '${args[2]}', '${args[3]}', '${args[4]}')`;

  db.run(query, function(err) {
    if (err) throw err;
    console.log('Successfully created a new row!');
  });
}

if (args[0] === 'voters') {
  const query = `INSERT INTO voters (first_name,last_name,gender,age)
               VALUES ("${args[1]}", "${args[2]}", "${args[3]}" ," ${args[4]}")`;
  db.run(query, function(err) {
    if (err) throw err;
    console.log('Successfully created a new row!');
  });
}

if (args[0] === 'votes') {
  const query = `INSERT INTO votes (politicianId, voterId)
               VALUES ("${args[1]}", "${args[2]}")`;
  db.run(query, function(err) {
    if (err) throw err;
    console.log('Successfully created a new row!');
  });
}
