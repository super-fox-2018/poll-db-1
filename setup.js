const fs = require('fs')
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./vote.db');
const argv = process.argv;
const commands = argv.slice(2);



function insertPoliticianToDatabase(name, party, location, grade_current){
    db.run('INSERT INTO Politicians VALUES (Null, ?, ?, ?, ?)', name, party, location, grade_current);
    console.log('Politician table has been inserted');
}

function insertVoterToDatabase(first_name,last_name,gender,age){
    db.run('INSERT INTO voters  Values(Null,?,?,?,?)',first_name,last_name,gender,age);
    console.log('Voters table has been inserted')

}

function insertVotesToDatabase(voter_id,politician_id){
    db.run('INSERT INTO votes Values(?,?)',voter_id,politician_id)
    console.log('Votes table has been inserted')
}

function updatePolitician(name,party,location,grade_current,id){
    db.run('UPDATE Politicians SET name = ?, party = ?, location = ?, grade_current = ? WHERE id =?',name,party,location,grade_current,id)
    console.log('Politician table has been updated')
}

function updateVoters(first_name,last_name,gender,age,id){
    db.run('UPDATE voters SET first_name = ?,last_name=?,gender=?,age=? WHERE id=?',first_name,last_name,gender,age,id)
    console.log('Voters table has been updated')
}

function updateVotes(voter_id,politician_id,id){
    db.run('UPDATE votes SET voter_id = ?,politician_id =? WHERE id =?',voter_id,politician_id,id)
    console.log('votes table has been updated')
}

function deletePoliticians(id){
    db.run(`DELETE FROM Politicians WHERE id = ?`, id);
    console.log(`ID ${id} has been deleted `);
}

function deleteVoters(id){
    db.run('DELETE FROM voters WHERE id =?',id);
    console.log(`ID ${id} has been deleted`)
}

function deleteVotes(id){
    db.run(`DELETE FROM votes WHERE id = ?`, id);
    console.log(`ID ${id} has been deleted `);
}


// function update(table,id,column,value){
//     let query = `UPDATE ${table} SET ${column} = "${value}" WHERE id = ${id}`
//     db.run(query,function (err) {
//         if (err) throw err;
//         console.log('Successfully created a new row!');
//       });
// }



// if(commands[0] === 'update'){
//     let table = commands[1];
//     let id = commands[2];
//     let column = commands[3];
//     let value = commands[4];
//     update(table,id,column,value);
// }




// insertPoliticianToDatabase('badu','abc','jakarta',10)
// insertVoterToDatabase('budi','badu','male',30)
// insertVotesToDatabase(11,20)
// updatePolitician('roky','zxc','entahberantah',20,21)
// updateVoters('robin','hood','male',25,301)
deletePoliticians(22)