const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./PollDB.db');

//Politician
//Voters
//DataVoters
function TambahData(tabel, data) {
  // if argv[2] === 'ad'

  //add Politician + argv[4] + argv[5] + argv[6] + argv[7]
  if (tabel === 'Politician') {
    let politik = `INSERT INTO Politician(name, partai, locations, grade_current)
    VALUES("${data[0]}", "${data[1]}","${data[2]}","${data[3]}");`
    db.run(politik, function(err) {
      if (err) throw err;
      console.log('Successfully inserted new data to tabel Politician !');
    });
  }

  if (tabel === 'Voters') {
    let voters = `INSERT INTO Voters(first_name, last_name, gender, age)
    VALUES("${data[0]}", "${data[1]}","${data[2]}", "${data[3]}");`
    db.run(tabel, function(err) {
      if (err) throw err;
      console.log('Successfully inserted new data to tabel Voters !');
    });
  }

  if (tabel === 'DataVoters') {
    let datavotes = `INSERT INTO DataVoters(id_voters, id_politician)
    VALUES("${data[0]}", "${data[1]}");`
    db.run(datavotes, function(err) {
      if (err) throw err;
      console.log('Successfully inserted new data to tabel DataVotes !');
    });

  }

}


//DELETE DATA
function DeleteData(tabel, id) {
  //DELETE FROM Customers
  // WHERE CustomerName='Alfreds Futterkiste';

  if (tabel === 'Politician') {
    let politik = `DELETE FROM Politician WHERE ID = ${id};`
    db.run(politik, function(err) {
      if (err) throw err;
      console.log('Successfully Deleted data from tabel Politician !');
    });
  }

  if (tabel === 'Voters') {
    let voters = `DELETE FROM Voters WHERE ID = ${id};`
    db.run(tabel, function(err) {
      if (err) throw err;
      console.log('Successfully Deleted data from tabel Voters !');
    });
  }

  if (tabel === 'DataVoters') {
    let datavotes = `DELETE FROM DataVoters WHERE ID = ${id};`
    db.run(datavotes, function(err) {
      if (err) throw err;
      console.log('Successfully Deleted data from tabel DataVotes !');
    });

  }

}



function UpdateData(tabel, id) {
  // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
  // WHERE CustomerID = 1;
  //name, partai, locations, grade_current
  if (tabel === 'Politician') {
    let politik = `UPDATE Politician SET name=${name} , partai = ${partai}, location = ${location}, grade_current = ${grade_current} WHERE ID = ${id};`
    db.run(politik, function(err) {
      if (err) throw err;
      console.log('Successfully Update data from tabel Politician !');
    });
  }
  //first_name, last_name, gender, age
  if (tabel === 'Voters') {
    let voters = `UPDATE Voters SET first_name=${name} , last_name = ${partai}, gender = ${location}, age = ${grade_current} WHERE ID = ${id};`
    db.run(tabel, function(err) {
      if (err) throw err;
      console.log('Successfully Update data from tabel Voters !');
    });
  }


  if (tabel === 'DataVoters') {
    let datavotes = `UPDATE DataVoters SET id_voters=${name} , id_politician = ${partai} WHERE ID = ${id};`
    db.run(datavotes, function(err) {
      if (err) throw err;
      console.log('Successfully Update data from tabel DataVotes !');
    });

  }

}



// DeleteData('Politician', 21)
// TambahData('Politician', ['HANDI', 'WHITE', 'MEDAN', 'A'])
module.exports = {
  TambahData,
  DeleteData,
  UpdateData

}
