const db    = require('./setup');
const args  = process.argv.slice(2);


if (args[0] === 'politicians') {
  const query = `DELETE FROM politicians WHERE id=${args[1]}`;

  db.run(query, function (err) {
    if (err) throw err;
    console.log('Successfully deleted!');
  });
}

if (args[0] === 'voters') {
  const query = `DELETE FROM politicians WHERE id=${args[1]}`;

  db.run(query, function (err) {
    if (err) throw err;
    console.log('Successfully deleted!');
  });
}

if (args[0] === 'votes') {
  const query = `DELETE FROM politicians WHERE id=${args[1]}`;

  db.run(query, function (err) {
    if (err) throw err;
    console.log('Successfully deleted!');
  });
}
