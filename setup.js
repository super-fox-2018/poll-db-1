//your code here
const db = require('./db.js')

const argv = process.argv;
const commands = argv.slice(2);
const commandLine = commands[0];
const createPoliticians = `CREATE TABLE politicians(
    id Integer Primary Key Autoincrement,
    name text,
    party text,
    location char(50),
    grade_current Integer
);` 

const createVoters = `CREATE TABLE voters(
    id INTEGER Primary Key Autoincrement,
    first_name text,
    last_name text,
    gender text,
    age Integer
);`

const createVotes = `CREATE TABLE votes(
    id INTEGER Primary Key Autoincrement,
    politicians_id Integer,
    voters_id Integer,
    FOREIGN KEY (politicians_id) REFERENCES politicians(id),
    FOREIGN KEY (voters_id) REFERENCES voters(id)
);`


if(commandLine === 'createPoliticians'){
    db.serialize(function(err){
        db.run(createPoliticians, function (err) {
            if (err) throw err;
            console.log('Successfully created a new table!');
          });
    })
}

if(commandLine === 'createVoters'){
    db.serialize(function(err){
        db.run(createVoters, function (err) {
            if (err) throw err;
            console.log('Successfully created a new table!');
          });
    })
}

if(commandLine === 'createVotes'){
    db.serialize(function(err){
        db.run(createVotes, function (err) {
            if (err) throw err;
            console.log('Successfully created a new table!');
          });
    })
}

