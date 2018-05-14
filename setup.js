//your code here
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./poll.db');
const fs = require('fs');



function createTable() {
  db.serialize(function(err) {
    if (err) {
      throw err
    }
    db.run(`CREATE TABLE  IF NOT EXISTS politicians (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,party TEXT,location TEXT,grade_current REAL)`)
    db.run(`CREATE TABLE IF NOT EXISTS voters (id INTEGER PRIMARY KEY AUTOINCREMENT,first_name TEXT,last_name TEXT,gender TEXT,age INTEGER)`)
    db.run(`CREATE TABLE IF NOT EXISTS votes (id INTEGER PRIMARY KEY AUTOINCREMENT,voterId INTEGER,politicianId INTEGER)`)
  })
}

function seedPolitician() {
  fs.readFile('./politicians.csv', 'utf8', (err, data) => {
    let resultDataPolitician = []
    let dataPolitician = data.split('\n')
    for (var i = 1; i < dataPolitician.length - 1; i++) {
      resultDataPolitician.push(dataPolitician[i].split(','))
      // console.log(resultDataPolitician.length);
    }
    db.serialize(() => {
      // console.log(resultDataPolitician);
      for (var i = 0; i < resultDataPolitician.length; i++) {
        // console.log(resultDataPolitician[i][0])
        db.run(`INSERT INTO politicians VALUES(null,'${resultDataPolitician[i][0]}','${resultDataPolitician[i][1]}','${resultDataPolitician[i][2]}',${resultDataPolitician[i][3]})`)
      }
    })
  })
}


function seedVoters() {
  fs.readFile('./voters.csv', 'utf8', (err, data) => {
    let resultDataVoters = []
    let dataVoters = data.split('\n')
    // console.log(dataVoters);
    for (var i = 1; i < dataVoters.length - 1; i++) {
      resultDataVoters.push(dataVoters[i].split(','))
      // console.log(resultDataVoters);
    }
    db.serialize(() => {
      // console.log(resultDataVoters);
      for (var i = 0; i < resultDataVoters.length; i++) {
        // console.log(resultDataVoters[i]);
        db.run(`INSERT INTO voters VALUES(null, '${resultDataVoters[i][0]}',"${resultDataVoters[i][1]}",'${resultDataVoters[i][2]}',${resultDataVoters[i][3]})`)
      }
    })
  })
}

function seedVotes() {
  fs.readFile('./votes.csv', 'utf8', (err, data) => {
    let resultDataVotes = []
    let dataVotes = data.split('\n')
    for (var i = 1; i < dataVotes.length - 1; i++) {
      resultDataVotes.push(dataVotes[i].split(','))
    }
    db.serialize(() => {
      for (var i = 0; i < resultDataVotes.length; i++) {
        db.run(`INSERT INTO votes VALUES (null,${resultDataVotes[i][0]},${resultDataVotes[i][1]})`)
      }
    })
  })
}

// createTable()
// seedPolitician()
// seedVoters()
// seedVotes()
