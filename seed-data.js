const fs = require('fs')
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./vote.db');

let voters = fs.readFileSync('voters.csv','utf8').split('\n')
for(let i=1;i<voters.length-1;i++){
    let data = voters[i].split(',')
    let inputVoters=`INSERT INTO voters(first_name,last_name,gender,age) Values("${data[0]}","${data[1]}","${data[2]}",${data[3]});`
    db.serialize(function() {
        db.run(inputVoters,function (err) {
            if (err) throw err;
            console.log('Successfully created a new row!');
          })
      });
}

// let politician = fs.readFileSync('politicians.csv','utf8').split('\n')

// for(let i=1;i<politician.length-1;i++){
//     let dataPol = politician[i].split(',')
//     let inputPol = `INSERT INTO Politicians(name,party,location,grade_current) Values("${dataPol[0]}","${dataPol[1]}","${dataPol[2]}",${dataPol[3]});`
//     db.serialize(function() {
//         db.run(inputPol,function (err) {
//             if (err) throw err;
//             console.log('Successfully created a new row!');
//           })
//       });
// }

// let votes = fs.readFileSync('votes.csv','utf8').split('\n')
// // console.log(votes)
// for(let i=1;i<votes.length-1;i++){
//     let dataVotes = votes[i].split(',')
//     let inputVotes =`INSERT INTO votes(voter_id,politician_id) Values(${dataVotes[0]},${dataVotes[1]});`

//     db.run(inputVotes,function (err) {
//         if (err) throw err;
//         console.log('Successfully created a new row!');
//       });
// }




   





module.exports = db