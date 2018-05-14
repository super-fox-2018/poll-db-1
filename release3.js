const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./PollDB.db');

//Politician
//Voters
//DataVoters

//1. Tampilkan nama politician , partai dan grade_current yg berada di partai R
// dan grade range 9 s/d 11

let gradePolitik = `SELECT name, partai, grade_current FROM Politician WHERE grade_current BETWEEN 9 AND 11 AND partai = 'R'`

// jumlah vote :
let olympia = `SELECT (SELECT COUNT(*) FROM DataVoters
WHERE id_politician =
 (SELECT id FROM Politician
 WHERE name = "Olympia Snowe")) AS totalVote,
 Politician.name FROM Politician WHERE name="Olympia Snowe"`
//3. hitung jumlah vote yang katanya mengandung kata 'ADAM'
let adam = `SELECT name, (SELECT COUNT(*) FROM DataVoters
 WHERE DataVoters.id_politician= Politician.id) AS 'totalVote'
 FROM Politician WHERE name LIKE 'Adam %'`


//4
let suarabanyak = `SELECT (SELECT COUNT(*) FROM DataVoters
WHERE DataVoters.id_politician = Politician.ID) as 'totalVote',
name, partai, locations FROM Politician ORDER BY totalVote DESC LIMIT 3`


//5 voting
let voting = `SELECT first_name, last_name, gender, age FROM Voters
 JOIN DataVoters ON DataVoters.ID = Voters.ID
 JOIN Politician ON Politician.ID = DataVoters.id_politician
 WHERE Politician.ID = 17;`

let isi = [gradePolitik, olympia, adam, suarabanyak, voting]
for (let i = 0; i < isi.length; i++) {
  db.all(isi[i], function(err, rows) {

    if (err) {

      console.log(err);


    }

    console.log(rows);


  });


}
