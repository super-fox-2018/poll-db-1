const fs = require('fs');
const db = require('./db.js');

let votersCSV = fs.readFileSync('./voters.csv', 'utf8')

let recordVoters = votersCSV.split('\n');

// for(let a = 1; a < recordVoters.length; a++){
//     let indvRecord = recordVoters[a].split(',');
//     let firstName = indvRecord[0];
//     let lastName = indvRecord[1];
//     let gender = indvRecord[2];
//     let age = Number(indvRecord[3]);
//     let query = `INSERT INTO voters (first_name, last_name, gender, age) VALUES ("${firstName}", "${lastName}", "${gender}", ${age});`
                
//                 db.run(query, function (err) {
//                     if (err) throw err;
//                     console.log('Successfully added a Voters!');
//                   });         
// }

let politiciansCSV = fs.readFileSync('./politicians.csv', 'utf8')
let politiciansByrow = politiciansCSV.split('\n');
for(let a = 1; a < politiciansByrow.length; a++){
    let politiciansRecord = politiciansByrow[a].split(',');
    let name = politiciansRecord[0];
    let party = politiciansRecord[1];
    let location = politiciansRecord[2];
    let grade_current = politiciansRecord[3];
    let query = `INSERT INTO politicians (name, party, location, grade_current) VALUES ("${name}","${party}","${location}", ${grade_current});`

    db.run(query, function(err){
        if(err) throw err;
        console.log('Successfully add a Politicians!')
    });
}

// let votesCSV = fs.readFileSync('./votes.csv', 'utf8')
// let votesByrow = votesCSV.split('\n');
// for(let a = 1; a < votesByrow.length; a++){
//     let votesRecord = votesByrow[a].split(',');
//     let votersID = votesRecord[0];
//     let politiciansID = votesRecord[1];
    
//     let query = `INSERT INTO votes (politicians_id, voters_id) VALUES (${politiciansID},${votersID});`

//     db.run(query, function(err){
//         if(err) throw err;
//         console.log('Successfully add a votes!')
//     });
// }

