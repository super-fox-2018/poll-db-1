const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

let query1 =
`SELECT name, party, grade_current
FROM politicians
WHERE party = 'R' AND grade_current > 9 AND grade_current < 11;`;

let query2 =
`SELECT COUNT(*) AS 'total_votes', politicians.name
FROM votes
JOIN politicians
	ON politicians.id = votes.politician_id
WHERE politicians.name = 'Olympia Snowe';`;

let query3 =
`SELECT politicians.name, COUNT(voter_id) AS 'total_votes'
FROM votes
JOIN politicians
	ON politicians.id = votes.politician_id
WHERE politicians.name LIKE '%Adam%'
GROUP BY politician_id;`;

let query4 =
`SELECT COUNT(voter_id) AS 'total_votes',  politicians.name, politicians.party, politicians.location
FROM votes
JOIN politicians
	ON politicians.id = votes.politician_id
GROUP BY politician_id
ORDER BY total_votes DESC
LIMIT 3;`;

let query5 =
`SELECT voters.*
FROM voters
JOIN votes
	ON voters.id = votes.voter_id
WHERE politician_id = (
	SELECT politicians.id 
	FROM politicians 
	WHERE politicians.name = 'Olympia Snowe');`;

let arrayOfQuery = [query1, query2, query3, query4, query5];

for (let i = 0; i < arrayOfQuery.length; i++) {
  let query = arrayOfQuery[i];
  db.all(query, function(err, result) {
    if (err) throw err;
    console.log(`QUERY #${i + 1}`);
    console.log(result);
  });
}
