const fs = require('fs')
const db = require('./setup')

const readpoliticians = fs.readFileSync('./politicians.csv', 'utf8').split('\n');
const readvoters = fs.readFileSync('./voters.csv', 'utf8').split('\n');
const readvotes = fs.readFileSync('./votes.csv', 'utf8').split('\n');

let politiciansData = []
for (var i = 1; i < readpoliticians.length; i++) {
  politiciansData.push(readpoliticians[i].split(','))
}


let votersData = []
for (var i = 1; i < readvoters.length; i++) {
  votersData.push(readvoters[i].split(','))
}


let votesData = []
for (var i = 1; i < readvotes.length; i++) {
  votesData.push(readvotes[i].split(','))
}

// console.log(politiciansData);
for (var i = 0; i < politiciansData.length; i++) {
  if (politiciansData[i].length !== 1) {
    const query = `INSERT INTO politicians (name, party, locations,grade_current)
                 VALUES ('${politiciansData[i][0]}', '${politiciansData[i][1]}', '${politiciansData[i][2]}', '${politiciansData[i][3]}')`;
  db.run(query, function(err) {
    if (err) throw err;
    console.log('successfully inserted new data to PoliticiansData table !');
  });
}
}

for (var i = 0; i < votersData.length; i++) {
  if (votersData[i].length !== 1) {
    const query = `INSERT INTO voters (first_name,last_name,gender,age)
                 VALUES ("${votersData[i][0]}", "${votersData[i][1]}", "${votersData[i][2]}" ," ${votersData[i][3]}")`;
  db.run(query, function(err) {
    if (err) throw err;
    console.log('successfully inserted new data to votersData table !');
  });
}
}

for (var i = 0; i < votesData.length; i++) {
  if (votesData[i].length !== 1) {
    const query = `INSERT INTO votes (politicianId, voterId)
                 VALUES ("${votesData[i][0]}", "${votesData[i][1]}")`;
  db.run(query, function(err) {
    if (err) throw err;
    console.log('successfully inserted new data to votesData table !');
  });
}
}
