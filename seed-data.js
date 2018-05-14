const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

class SeedData {
  static getPoliticians() {
    const politicians = fs.readFileSync('./politicians.csv', 'utf8').split('\n')
    // console.log(politicians)
    for (let i = 1; i < politicians.length; i++) {
      let politician = politicians[i].split(',');
      // console.log(politician)
      const query = `INSERT INTO politicians 
                     (name, party, location, grade_current)
                     VALUES ("${politician[0]}", "${politician[1]}", "${politician[2]}", "${politician[3]}")`;
      
      if (politicians[i] !== '') {
        db.run(query, function(err) {
          if (err) throw err;
          console.log(`Politicians: inserted row data ${i}`)
        })
      }
    }
  }

  static getVoters() {
    const voters = fs.readFileSync('./voters.csv', 'utf8').split('\n');
    for (let i = 0; i < voters.length; i++) {
      let voter = voters[i].split(',');
      const query = `INSERT INTO voters 
                     (first_name, last_name, gender, age)
                     VALUES ("${voter[0]}", "${voter[1]}", "${voter[2]}", "${voter[3]}")`;
      
      if (voters[i] !== '') {
        db.run(query, function(err) {
          if (err) throw err;
          console.log(`inserted row data ${i}`)
        })
      }
    }
  }

  static getVotes() {
    const votes = fs.readFileSync('./votes.csv', 'utf8').split('\n');
    for (let i = 0; i < votes.length; i++) {
      let vote = votes[i].split(',');
      const query = `INSERT INTO votes 
                     (voterId, politicianId)
                     VALUES ("${vote[0]}", "${vote[1]}")`;
      
      if (votes[i] !== '') {
        db.run(query, function(err) {
          if (err) throw err;
          console.log(`inserted row data ${i}`)
        })
      }
    }
  }
}

module.exports = SeedData;