const db = require('./setup');
let arrQuery = [];
let query1 = `select name, party, grade_current 
from candidate where party = 'R' and grade_current >= 9 and grade_current <= 11;`;
arrQuery.push(query1);

let query2 = `select count(*) as totalVotes, candidate.name from candidate inner join voter_candidate 
on candidate.id = voter_candidate.candidate_id
where name = 'Olympia Snowe' ;`
arrQuery.push(query2);

let query3 = `select count(*) As totalVotes , candidate.name from candidate inner join voter_candidate 
on candidate.id = voter_candidate.candidate_id
where name like 'Adam%'  group by candidate.name;`
arrQuery.push(query3)

let query4 = `select count(*) As totalVotes , candidate.name from candidate inner join voter_candidate 
on candidate.id = voter_candidate.candidate_id group by candidate.name order by totalVotes desc limit 3;`
arrQuery.push(query4);

let query5 = `select voters.* from candidate inner join voter_candidate inner join voters on
candidate.id = voter_candidate.candidate_id and 
voter_candidate.voter_id = voters.id
 where name = 'Olympia Snowe';`;
arrQuery.push(query5);

for (let i = 0; i < arrQuery.length; i++) {
    db.all(arrQuery[i], [], (err, rows) => {
        console.log(` `);
        console.log(`----- soal: ${i+1}--------`);
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
    })
}