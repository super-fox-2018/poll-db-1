const fs = require('fs');
const db = require('./setup.js');

let voters = fs.readFileSync('./voters.csv', 'utf8').split('\n');
let votes = fs.readFileSync('./votes.csv', 'utf8').split('\n');
let politicians = fs.readFileSync('./politicians.csv', 'utf8').split('\n');

function addVoters() {
    for(let i = 1; i < voters.length; i++) {
        if (voters[i]) {
            voters[i] = voters[i].split(',');
        
            let addData = `INSERT INTO Voters('first_name', 'last_name', 'gender', 'age')
                VALUES("${voters[i][0]}", "${voters[i][1]}", "${voters[i][2]}", "${voters[i][3]}");`
            
            db.run(addData, function(err){
                if(err) throw err;
                console.log('successfully add data!');
            });
        }
    }
}

function addVotes() {
    for(let i = 1; i < votes.length; i++) {
        if (votes[i]) {
            votes[i] = votes[i].split(',');
        
            let addData = `INSERT INTO Votes('voterId', 'politicianId')
                VALUES("${votes[i][0]}", "${votes[i][1]}");`
            
            db.run(addData, function(err){
                if(err) throw err;
                console.log('successfully add data!');
            });
        }
    }
}

function addPoliticians() {
    for(let i = 1; i < politicians.length; i++) {
        if (politicians[i]) {
            politicians[i] = politicians[i].split(',');
        
            let addData = `INSERT INTO Politicians('name', 'party', 'location', 'grade_current')
                VALUES("${politicians[i][0]}", "${politicians[i][1]}", "${politicians[i][2]}", "${politicians[i][3]}");`
            
            db.run(addData, function(err){
                if(err) throw err;
                console.log('successfully add data!');
            });
        }
    }
}

// addVoters();
// addVotes();
// addPoliticians();