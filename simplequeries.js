"use strict"
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./pollDB1.db');

db.all(`SELECT * FROM politicians WHERE party = ? AND grade_current BETWEEN 9 AND 11`,["R"],(err,rows)=>{
    if(err) return console.log(err);
    console.log('\n 1')
    console.log(rows)
})

db.all(`SELECT COUNT(*) AS totalVote, politicians.name FROM votes JOIN politicians ON votes.politicianId = politicians.id WHERE politicians.name = ?`,["Olympia Snowe"],(err,rows)=>{
    if(err) return console.log(err);
    console.log('\n 2')
    console.log(rows)
})

db.all(`SELECT COUNT(*) AS totalVote, politicians.name FROM votes JOIN politicians ON votes.politicianId = politicians.id WHERE politicians.name LIKE ? GROUP BY name`,["Adam %"],(err,rows)=>{
    if(err) return console.log(err);
    console.log('\n 3')
    console.log(rows)
})

db.all(`SELECT COUNT(*) AS totalVote, politicians.name FROM votes JOIN politicians ON votes.politicianId = politicians.id GROUP BY name ORDER BY totalVote DESC LIMIT 3`,(err,rows)=>{
    if(err) return console.log(err);
    console.log('\n 4')
    console.log(rows)
})

db.all(`SELECT votes.* FROM votes JOIN politicians ON votes.politicianId = politicians.id WHERE politicians.name = ?`,["Olympia Snowe"],(err,rows)=>{
    if(err) return console.log(err);
    let output = []
    console.log('\n 5')
    for(let i = 0; i < rows.length; i++){
        db.all(`SELECT voters.* FROM voters JOIN votes ON voters.id = votes.voterId WHERE voters.id = ?`, [rows[i]['voterId']],(err,result)=>{
            output.push(result[0])
            if(i === rows.length-1) console.log(output)
        })
    }
})

db.close()