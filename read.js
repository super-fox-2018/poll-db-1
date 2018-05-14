const db = require('./setup');
const args = process.argv.slice(2);
if (args[0] === 'politicians') {
  db.all('SELECT * FROM politicians', function(err, politicians) {
    console.log(politicians);
  });
}
if (args[0] === 'voters') {
  db.all('SELECT * FROM voters', function(err, voters) {
    console.log(voters);
  });
}
if (args[0] === 'votes') {
  db.all('SELECT * FROM votes', function(err, votes) {
    console.log(votes);
  });
}
