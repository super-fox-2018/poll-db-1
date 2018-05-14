const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./poll.db');

const data = require('./seed-data.js');
const politicians = data.politiciansFile;
const voters = data.votersFile;
const votes = data.votesFile;

class Setup {
  start() {
    const createVotersTable =
  `CREATE TABLE voters (
id integer PRIMARY KEY AUTOINCREMENT,
first_name VARCHAR,
last_name VARCHAR,
gender VARCHAR,
age integer
);`;
    const createPoliticiansTable =
    `CREATE TABLE politicians (
id integer PRIMARY KEY AUTOINCREMENT,
name VARCHAR,
party VARCHAR,
location VARCHAR,
grade_current integer
);`;
    const createVotesTable =
    `CREATE TABLE votes (
id integer PRIMARY KEY AUTOINCREMENT,
voter_id integer,
politician_id integer,
FOREIGN KEY (voter_id) REFERENCES voters(id),
FOREIGN KEY (politician_id) REFERENCES politicians(id)
);`;

    db.serialize(function() {
      db.run(createVotersTable);
      db.run(createPoliticiansTable);
      db.run(createVotesTable);

      let politicianStmt = db.prepare(`INSERT INTO politicians (name, party, location, grade_current) VALUES (?,?,?,?)`);
      for (let i = 1; i < politicians.length; i++) {
        let politician = politicians[i].split(',');
        politicianStmt.run(...politician);
      }
      politicianStmt.finalize();

      let voterStmt = db.prepare(`INSERT INTO voters (first_name, last_name, gender, age) VALUES (?,?,?,?)`);
      for (let i = 1; i < voters.length; i++) {
        let voter = voters[i].split(',');
        voterStmt.run(...voter);
      }
      voterStmt.finalize();

      let voteStmt = db.prepare(`INSERT INTO votes (voter_id, politician_id) VALUES (?,?)`);
      for (let i = 1; i < votes.length; i++) {
        let vote = votes[i].split(',');
        voteStmt.run(...vote);
      }
      voteStmt.finalize();
      console.log('Finish Setup the database');
    });

    db.close();
  }
}

module.exports = Setup;
