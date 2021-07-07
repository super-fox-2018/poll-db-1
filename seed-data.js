var fs = require('fs')
let data = fs.readFileSync('politicians.csv', 'utf8').split('\n') //.split("\n")
let voters = fs.readFileSync('voters.csv', 'utf8').split('\n') //.split("\n")
let votes = fs.readFileSync('votes.csv', 'utf8').split('\n') //.split("\n")

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./PollDB.db');

let PoliticData = []
for (let i = 1; i < data.length; i++) {
  PoliticData.push(data[i].split(','))
}


let datavoters = []
for (let i = 1; i < voters.length; i++) {
  datavoters.push(voters[i].split(','))
}

let datavotes = []
for (let i = 1; i < votes.length; i++) {
  datavotes.push(votes[i].split(','))
}





// DATA POLITICIAN
for (let i = 0; i < PoliticData.length; i++) {
  if (PoliticData[i].length !== 1) {
    const query = `INSERT INTO Politician (name, partai, locations,grade_current)
                 VALUES ('${PoliticData[i][0]}', '${PoliticData[i][1]}', '${PoliticData[i][2]}', '${PoliticData[i][3]}')`;
    db.run(query, function(err) {
      if (err) throw err;
      console.log('Successfully inserted new data to PoliticData table !');
    });
  }
}
//
//
//
// // DATA VOTERS
for (let i = 0; i < datavoters.length; i++) {
  if (datavoters[i].length !== 1) {
    const query = `INSERT INTO Voters (first_name, last_name, gender, age)
                 VALUES ("${datavoters[i][0]}", "${datavoters[i][1]}", "${datavoters[i][2]}", "${datavoters[i][3]}")`;
    db.run(query, function(err) {
      if (err) throw err;
      console.log('Successfully inserted new data to datavoters table !');
    });
  }
}



// // // DATA VOTES voterId,politicianId
for (let i = 0; i < datavotes.length; i++) {
  if (datavotes[i].length !== 1) {
    const query = `INSERT INTO DataVoters (id_voters, id_politician)
                 VALUES ("${datavotes[i][0]}", "${datavotes[i][1]}")`;
    db.run(query, function(err) {
      if (err) throw err;
      console.log('Successfully inserted new data to datavotes table !');
    });
  }
}
