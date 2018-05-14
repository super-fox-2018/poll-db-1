const fs = require('fs');
const database = require('./database.js');

console.log("------------------------------------------------");
database.all(`SELECT politicians.name, politicians.party, politicians.grade_current
              FROM politicians WHERE party = "R" AND grade_current
              BETWEEN 9 AND 11`,(err,row)=>{
  if(err) throw err;
  console.log(row);
  console.log("1-----------------------------------------------");
})
database.all(`SELECT (SELECT COUNT(*) FROM votes WHERE politicians_id = (
              SELECT politicians.id FROM politicians WHERE name = "Olympia Snowe"))
              AS total_value,politicians.name FROM politicians WHERE name="Olympia Snowe" `,(err,row)=>{
  if(err) throw err;
  console.log(row);
  console.log("2-----------------------------------------------");
})

database.all(`SELECT politicians.name, COUNT(*) AS total_vote FROM politicians
JOIN votes ON votes.politicians_id = politicians.id WHERE politicians.name
LIKE "Adam%" GROUP BY politicians.name;
`,(err,row)=>{
  if(err) throw err;
  console.log(row);
  console.log("3-----------------------------------------------");
})

database.all(`SELECT COUNT(*) AS total_vote,politicians.name,politicians.party,politicians.location
FROM politicians
JOIN votes ON votes.politicians_id
WHERE votes.politicians_id = politicians.id
GROUP BY politicians.id ORDER BY total_vote DESC LIMIT 3
`,(err,row)=>{
  console.log(row);
  console.log("4-----------------------------------------------");
})

database.all(`SELECT * FROM voters
JOIN votes ON votes.voters_id = voters.id WHERE politicians_id =(
SELECT id FROM politicians WHERE name = "Olympia Snowe"
)`,(err,row)=>{
  console.log(row);
  console.log("5-----------------------------------------------");
})

// database.all(``)
