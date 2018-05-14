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

db.all(`SELECT voters.* FROM voters JOIN votes ON voters.id = votes.voterId WHERE votes.politicianId = (SELECT votes.politicianId FROM votes JOIN politicians ON votes.politicianId = politicians.id WHERE politicians.name = ?)`,["Olympia Snowe"],(err,rows)=>{
    if(err) return console.log(err);
    console.log('\n 5')
    console.log(rows)
})

db.close()