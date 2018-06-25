const db = require('./db.js');

const argv = process.argv;

const commands = argv.slice(2);


console.log(commands);

function update(table, id, column, value){
    let query = `UPDATE ${table} SET ${column} = "${value}" WHERE id = ${id}`
    db.run(query, function(err){
        if(err) throw err;
    })
}

function erase(table, id){
    let query = `DELETE FROM ${table} WHERE id = ${id}`
    db.run(query, function(err){
        if(err) throw err;
    })
}

db.all(`SELECT politicians.name, politicians.party, politicians.grade_current FROM politicians WHERE party = "R" AND grade_current BETWEEN 9 AND 11`,(err,row)=>{
    if(err) throw err;
    console.log(row);
    console.log("------------------------------------------------");
  })


db.all(`SELECT (SELECT COUNT(*) FROM votes WHERE politicians_id = 
        (SELECT politicians.id FROM politicians WHERE name = "Olympia Snowe")) 
        AS total_value, politicians.name FROM politicians WHERE name="Olympia Snowe" `,(err,row)=>{
    if(err) throw err;
    console.log(row);
    console.log("------------------------------------------------");
})

db.all(`SELECT name as name, COUNT(name) as total_votes from politicians inner join votes on politicians.id = votes.politicians_id where name like '%adam%' group by name;`,(err,row)=>{
    if(err) throw err;
    console.log(row);
    console.log("------------------------------------------------");
})

db.all(`SELECT name as name, COUNT(name) as total_votes from politicians inner join votes on politicians.id = votes.politicians_id group by name order by total_votes desc limit 3`,(err,row)=>{
    if(err) throw err;
    console.log(row);
    console.log("------------------------------------------------");
})

db.all(`SELECT first_name, last_name, gender, age from voters inner join votes on voters.id = votes.voters_id where votes.politicians_id = (select id from politicians where name = 'Olympia Snowe');`,(err,row)=>{
    if(err) throw err;
    console.log(row);
    console.log("------------------------------------------------");
})


  




if(commands[0]==='update'){
    let table = commands[1];
    let id = commands[2];
    let column = commands[3];
    let value = commands[4];
    update(table, id, column, value);
}

if(commands[0]==='erase'){
    let table = commands[1];
    let id = commands[2];
    erase(table, id);
}

