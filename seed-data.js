const db = require('./setup');
const fs = require('fs');


// insert candidate
const stringCan = fs.readFileSync('./politicians.csv','utf8').split('\n');

for (let i=1; i < stringCan.length; i++){
    if (stringCan[i]){
        let arrPoliticatns = stringCan[i].split(',');
        const query = `INSERT INTO candidate (name, party, location, grade_current) VALUES ('${arrPoliticatns[0]}', '${arrPoliticatns[1]}','${arrPoliticatns[2]}',${arrPoliticatns[3]});`
        db.run(query, function (err){
            if (err) throw err;
            console.log('Successfully create a new row', stringCan[i]);
        })
    }
}


const stringVoters = fs.readFileSync('./voters.csv','utf8').split('\n');

for (let i=1; i < stringVoters.length; i++){
    if (stringVoters[i]){
        let arrVoters = stringVoters[i].split(',');
        const query = `INSERT INTO voters (first_name, last_name, gender, age) VALUES ("${arrVoters[0]}", "${arrVoters[1]}","${arrVoters[2]}",${arrVoters[3]});`
        db.run(query, function (err){
            if (err) throw err;
            console.log('Successfully create a new row', stringVoters[i]);
        })
    }
}


const stringVotes = fs.readFileSync('./votes.csv','utf8').split('\n');

for (let i=1; i < stringVotes.length; i++){
    if (stringVotes[i]){
        let arrVotes = stringVotes[i].split(',');
        const query = `INSERT INTO voter_candidate (voter_id, candidate_id) VALUES (${arrVotes[0]}, ${arrVotes[1]});`
        db.run(query, function (err){
            if (err) throw err;
            console.log('Successfully create a new row', stringVotes[i]);
        })
    }
}