const fs = require('fs')
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./vote.db');



1.
db.all(`SELECT name,party,grade_current FROM Politicians 
    WHERE party ='R' AND grade_current >= 9
    AND grade_current < 11;`,function(err,data){
        if(err) throw err;
        console.log(data)
    });

//2.
db.all(`SELECT count(*) AS totalVote,Politicians.name
FROM votes
JOIN Politicians
ON votes.politician_id = Politicians.id
WHERE Politicians.name = 'Olympia Snowe'`,function(err,data){
    if(err) throw err
    console.log(data)
});

//3.
db.all(`SELECT Politicians.name ,COUNT(*) AS totalVote
FROM Politicians
JOIN votes
ON Politicians.id = votes.politician_id 
WHERE Politicians.name LIKE  '%Adam%'
GROUP BY Politicians.name`,function(err,data){
    console.log(data)
});

//4
db.all(`SELECT COUNT(*) AS totalVote,Politicians.name,Politicians.party,
Politicians.location
FROM Politicians
JOIN votes
ON votes.politician_id = Politicians.id
GROUP BY Politicians.id
ORDER BY totalVote desc
LIMIT 3;`,function(err,data){
    console.log(data)
})

//5
db.all(`SELECT voters.*,votes.voter_id
FROM voters
JOIN votes
ON voters.id = votes.voter_id
JOIN Politicians
ON Politicians.id = votes.politician_id
WHERE Politicians.name = 'Olympia Snowe'`,function(err,data){
    console.log(data)
})