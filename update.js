const db = require('./setup');
const args = process.argv.slice(2);


if (args[0] === 'politicians') {
  const query = `UPDATE politicians SET name ='${args[2]}',party='${args[3]}',locations='${args[4]}',grade_current = ${args[5]} WHERE id= ${args[1]}`;

  db.run(query, function(err) {
    if (err) throw err;
    console.log('Successfully updated!');
  });
}

if (args[0] === 'voters') {
  const query = `UPDATE voters SET first_name ='${args[2]}',last_name='${args[3]}',gender='${args[4]}', age = ${args[5]} WHERE id= ${args[1]}`;

  db.run(query, function(err) {
    if (err) throw err;
    console.log('Successfully updated!');
  });
}

if (args[0] === 'votes') {
  const query = `UPDATE votes SET voterId = ${args[2]}, politicianId=${args[3]} WHERE id= ${args[1]}`;

  db.run(query, function(err) {
    if (err) throw err;
    console.log('Successfully updated!');
  });
}
