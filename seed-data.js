const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./poll.db');


//Adding data from csv files to database
db.serialize (function politician(){
  var stmt = db.prepare("INSERT INTO politicians(name, party, location, grade_current) VALUES (?,?,?,?)");
  let politicians = fs.readFileSync("politicians.csv", "utf8").split("\n");
  politicians.splice(0,1);

  for (let i = 0; i < politicians.length; i++){
    politicians[i] = politicians[i].split(",");
    stmt.run(`${politicians[i][0]}`, `${politicians[i][1]}`, `${politicians[i][2]}`, `${politicians[i][3]}`);
    }
  stmt.finalize();

});

db.serialize (function votes(){
  var stmt = db.prepare("INSERT INTO votes(voter_id, politician_id) VALUES (?,?)");
  let votes = fs.readFileSync("votes.csv", "utf8").split("\n");
  votes.splice(0,1);
  for (let i = 0; i < votes.length; i++){
    votes[i] = votes[i].split(",");
    stmt.run(`${votes[i][0]}`, `${votes[i][1]}`);
    }
  stmt.finalize();

});

db.serialize (function voters(){
  var stmt = db.prepare("INSERT INTO voters(first_name, last_name, gender, age) VALUES (?,?,?,?)");
  let voters = fs.readFileSync("voters.csv", "utf8").split("\n");
  voters.splice(0,1);
  for (let i = 0; i < voters.length; i++){
    voters[i] = voters[i].split(",");
    stmt.run(`${voters[i][0]}`, `${voters[i][1]}`, `${voters[i][2]}`, `${voters[i][3]}`);
    }
  stmt.finalize();

});



module.exports = db;