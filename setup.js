const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./PollDB.db');

let Politician = `CREATE TABLE Politician(
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar(255),
  partai varchar(255),
  locations varchar(255),
  grade_current REAL
);`

let Voters =
  `CREATE TABLE Voters(
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name varchar(255),
  last_name varchar(255),
  gender varchar(255),
  age INTEGER
);`


let DataVoters =
  `CREATE TABLE DataVoters(
ID INTEGER PRIMARY KEY AUTOINCREMENT,
id_voters INTEGER,
id_politician INTEGER,
FOREIGN KEY(id_voters) REFERENCES Voters(ID),
FOREIGN KEY(id_politician) REFERENCES Politician(ID)
);`







db.run(Politician, function(err) {
  if (err) throw err;
  console.log('Successfully created a new table!');
});

db.run(Voters, function(err) {
  if (err) throw err;
  console.log('Successfully created a new table!');
});

db.run(DataVoters, function(err) {
  if (err) throw err;
  console.log('Successfully created a datavoters!');
});




// module.exports = db;
