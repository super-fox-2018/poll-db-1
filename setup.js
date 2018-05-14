'use strict'
const db = require('./seed-data')
const fs = require ('fs')

// TABLE POLITICIANS
var convertPoliticians = fs.readFileSync('politicians.csv', 'utf-8').split('\n')
// console.log(convertPoliticians)
for(let i=1; i<convertPoliticians.length; i++){
    // console.log(convertPoliticians[i])
    var details = convertPoliticians[i].split(',')
    // console.log(details[0])
    let politicians = `INSERT INTO politicians (name, party, location, grade_current) VALUES ('${details[0]}', '${details[1]}', '${details[2]}','${details[3]}')`
    
    db.run(politicians, function(err){
        if(err) throw err
    })
}

// TABLE VOTERS
var convertVoters = fs.readFileSync('voters.csv', 'utf-8').split('\n')
for(let i=1; i<convertVoters.length; i++){
    var details = convertVoters[i].split(',')
    let voters = `INSERT INTO voters (first_name, last_name, gender, age) VALUES ("${details[0]}", "${details[1]}", "${details[2]}","${details[3]}")`
    
    db.run(voters, function(err){
        if(err) throw err
    })
}

// TABLE VOTES
var convertVotes = fs.readFileSync('votes.csv', 'utf-8').split('\n')
for(let i=1; i<convertVotes.length; i++){
    var details = convertVotes[i].split(',')
    let votes = `INSERT INTO votes (voterId, politicianId) VALUES ("${details[0]}","${details[1]}")`
    
    db.run(votes, function(err){
        if(err) throw err
    })
}
