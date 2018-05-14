const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./pulldb1.db');

//Politician
//Voters
//DataVoters

//1. Tampilkan nama politician , partai dan grade_current yg berada di partai R
// dan grade range 9 s/d 11

let gradePolitik = `SELECT name, party, grade_current FROM politicians WHERE grade_current BETWEEN 9 AND 11 AND partai = 'R'`

// jumlah vote :
let olympia = `SELECT (SELECT COUNT(*) FROM Voters
WHERE id_politicians =
 (SELECT id FROM politicians
 WHERE name = "Olympia Snowe")) AS totalVote,
 Politicians.name FROM Politicians WHERE name="Olympia Snowe"`
//3. hitung jumlah vote yang katanya mengandung kata 'ADAM'
let adam = `SELECT name, (SELECT COUNT(*) FROM voters
 WHERE voters.id_politicians= politicians.id) AS 'totalVote'
 FROM Politicians WHERE name LIKE 'Adam %'`


//4
let suarabanyak = `SELECT (SELECT COUNT(*) FROM voters
WHERE voters.id_politicians = politicians.ID) as 'totalVote',
name, party, locations FROM politicians ORDER BY totalVote DESC LIMIT 3`


//5 voting
let voting = `SELECT first_name, last_name, gender, age FROM voters
 JOIN voters ON voters.ID = voters.ID
 JOIN politicians ON politicians.ID = voters.id_politicians
 WHERE politicians.ID = 17;`

let isi = [gradePolitik, olympia, adam, suarabanyak, voting]
for (let i = 0; i < isi.length; i++) {
  db.all(isi[i], function(err, rows) {

    if (err) {

      console.log(err);


    }

    console.log(rows);


  });


}
