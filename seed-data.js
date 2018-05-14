const db = require('./db');
const { politicians } = require('./data');
const { voters } = require('./data');
const { votes } = require('./data');


let politiciansQuery = `INSERT INTO politicians (name, party, location, grade_current) VALUES `;
for (let i = 0; i < politicians.length; i += 1) {
  const politician = politicians[i];
  politiciansQuery += `("${politician[0]}","${politician[1]}","${politician[2]}",${politician[3]})`;
  if (i < politicians.length - 1) politiciansQuery += ',';
  else politiciansQuery += ';';
}


let votersQuery = `INSERT INTO voters (first_name, last_name, gender, age) VALUES `;
for (let i = 0; i < voters.length; i += 1) {
  const voter = voters[i];
  votersQuery += `("${voter[0]}","${voter[1]}","${voter[2]}",${voter[3]})`;
  if (i < voters.length - 1) votersQuery += ',';
  else votersQuery += ';';
}

let votesQuery = `INSERT INTO votes (voter_id, politician_id) VALUES `;
for (let i = 0; i < votes.length; i += 1) {
  const vote = votes[i];
  votesQuery += `(${vote[0]},${vote[1]})`;
  if (i < votes.length - 1) votesQuery += ',';
  else votesQuery += ';';
}

db.run(politiciansQuery, (err) => {
  if (err) throw err;
  console.log('Successfully added politicians');
});

db.run(votersQuery, (err) => {
  if (err) throw err;
  console.log('Successfully added voters');
});

db.run(votesQuery, (err) => {
  if (err) throw err;
  console.log('Successfully added votes');
});