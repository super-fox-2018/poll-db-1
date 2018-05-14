var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./poll.db');

class Model {
  static insertDataPolitician(name,party,location,grade_current) {
    db.serialize(()=>{
      db.run(`INSERT INTO politicians VALUES (null,?,?,?,?)`,name,party,location,grade_current)
    })
  }
  static insertDataVoter(first_name,last_name,gender,age) {
    db.serialize(()=>{
      db.run(`INSERT INTO voters VALUES(null,?,?,?,?)`,first_name,last_name,gender,age)
    })
  }
  static insertDataVotes(voterId,politicianId) {
    db.serialize(()=>{
      db.run(`INSERT INTO votes VALUES(null,?,?)`,voterId,politicianId)
    })
  }
}

class Update {
  static updatePolitician(id) {
    db.run(`UPDATE politicians SET name = 'Anna Eshoo' WHERE id = ${id}`)
  }
}

class Delete {
  static deletePolitician(id) {
    db.run(`DELETE FROM politicians WHERE id = ${id}`)
  }
}

class ShowPolitician {
  static politician() {
    let showDataPolitician = `SELECT name,party,grade_current FROM politicians WHERE party='R' AND grade_current > 9 AND grade_current < 11`
    db.all(showDataPolitician,(err,res)=>{
      console.log(res);
    })
  }
}

class ShowOlympiaSnowe {
  static show() {
    let showOlympiaSnowe = `SELECT count(*) AS totalVote,politicians.name FROM votes JOIN politicians ON votes.politicianId = politicians.id WHERE politicians.name ='Olympia Snowe'`
    db.all(showOlympiaSnowe,(err,res)=>{
      console.log(res);
    })
  }
}

class ShowAdam {
  static adam() {
    let showAdam = `SELECT name,count (*) AS totalVote FROM votes JOIN politicians ON votes.politicianId = politicians.id WHERE name LIKE 'Adam%' GROUP BY politicians.name`
    db.all(showAdam,(err,res)=>{
      console.log(res);
    })
  }
}

class ThreePolitician {
  static show() {
    let showMostVote =`SELECT count(*) AS totalVote,politicians.name ,party, location FROM politicians JOIN votes ON votes.politicianId =politicians.id GROUP BY politicians.name ORDER BY totalVote DESC LIMIT 3`
    db.all(showMostVote,(err,res)=>{
      console.log(res);
    })
  }
}

class VoteOlympiaSnowe {
  static showVoteOlympia() {
let showVote =`SELECT first_name,last_name,gender,age
	FROM politicians
	JOIN votes
	ON votes.politicianId =politicians.id
	JOIN voters
	ON voters.id = votes.voterId
	WHERE name = 'Olympia Snowe'`
  db.all(showVote,(err,res)=>{
    console.log(res);
  })
  }
}

// Model.insertDataPolitician('Bram','R','IL',9.098567)
// Model.insertDataVoter('Arif','Ardi','Female',80)
// Model.insertDataVotes(151,21)
// Update.updatePolitician(20)
// Delete.deletePolitician(21)
// ShowPolitician.politician()
// ShowOlympiaSnowe.show()
// ShowAdam.adam()
// ThreePolitician.show()
// VoteOlympiaSnowe.showVoteOlympia()
