const db = require('./../db');

const query1 = `SELECT name, party, grade_current 
                FROM politicians
                WHERE party = 'R' AND grade_current BETWEEN 9 AND 11;`;

db.all(query1, (err, output) => {
  if (err) throw err;
  console.log(output);
});

const query2 = `SELECT COUNT(*) AS totalVote, politicians.name FROM politicians
                INNER JOIN votes
                ON politicians.id = votes.politician_id
                WHERE politician_id = (SELECT id FROM politicians WHERE name = 'Olympia Snowe');`


db.all(query2, (err, output) => {
  if (err) throw err;
  console.log(output);
});

const query3 = `SELECT politicians.name, COUNT(*) AS totalVote
                FROM politicians
                INNER JOIN votes
                ON politicians.id = votes.politician_id
                WHERE politicians.name LIKE '%Adam%'
                GROUP BY 1;`

db.all(query3, (err, output) => {
  if (err) throw err;
  console.log(output);
});

const query4 = `SELECT politicians.name, politicians.party, COUNT(*) AS totalVote
                FROM politicians
                INNER JOIN votes
                ON politicians.id = votes.politician_id
                GROUP BY 1
                ORDER BY 3 DESC
                LIMIT 3;`

db.all(query4, (err, output) => {
  if (err) throw err;
  console.log(output);
});

const query5 = `SELECT voters.* FROM voters
                INNER JOIN votes
                ON voters.id = votes.voter_id
                WHERE votes.politician_id = (SELECT id FROM politicians WHERE name = 'Olympia Snowe');`

db.all(query5, (err, output) => {
  if (err) throw err;
  console.log(output);
});