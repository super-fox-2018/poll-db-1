const db = require('./seed-data')

db.all(`SELECT name, party, grade_current FROM politicians WHERE
    party = "R" AND grade_current >= 9 AND grade_current <= 11`, function(err, politicians){
        if(err) throw err
        console.log(politicians) 
});

db.all(`SELECT COUNT (*) AS totalVote, politicians.name FROM votes 
    JOIN politicians ON votes.politicianId = politicians.politicianId WHERE 
    votes.politicianId = (SELECT politicianId FROM politicians WHERE
    name = "Olympia Snowe")`, function(err, pol){
        if(err) throw err
        console.log(pol)
})


db.all(`SELECT politicians.name, COUNT (*) AS totalVote FROM votes 
    JOIN politicians ON votes.politicianId = politicians.politicianId WHERE
    politicians.name like "%Adam%" GROUP BY politicians.name ORDER BY totalVote asc`, function(err, pol){
        if(err) throw err
        console.log(pol)
})

db.all(`SELECT COUNT (*) AS totalVote, politicians.name, politicians.party, politicians.location FROM votes 
    JOIN politicians ON votes.politicianId = politicians.politicianId
    GROUP BY politicians.name ORDER BY totalVote desc LIMIT 3`, function(err, pol){
        if(err) throw err
        console.log(pol)
})

db.all(`SELECT first_name, last_name, gender, age FROM voters JOIN
        votes ON votes.voterId = voters.voterId WHERE 
        votes.politicianId = (SELECT politicianId FROM politicians WHERE
            name = "Olympia Snowe")`, function (err, pol){
                if(err) throw err
                console.log(pol)
        })
