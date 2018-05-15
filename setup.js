//your code here
const db    = require('./seed-data.js');


// Insert, Update and Delete data into/from DB

const args  = process.argv.slice(2);
if(args[1] !== undefined){
 let userInput = args[1];
  let query;
  if(args[0].toUpperCase() === "INSERT"){
    switch (userInput){
      case "politicians" : {
        query = `INSERT INTO politicians (name, party, location, grade_current)
                 VALUES ('${args[2]}', '${args[3]}', '${args[4]}', '${args[5]}')`;
        break;
      }
      case "voters" : {
        query = `INSERT INTO voters (first_name, last_name, gender, age)
                 VALUES ('${args[2]}', '${args[3]}', '${args[4]}', '${args[5]}')`;
        break;
      }
      case "votes" : {
        query = `INSERT INTO votes (voter_id, politician_id)
                 VALUES ('${args[2]}', '${args[3]}')`;
        break;
      }
    }
  }
  else if(args[0].toUpperCase() === "UPDATE"){
    switch(userInput){
      case "politicians" : {
        query =  `UPDATE politicians
                  SET name = '${args[2]}'',
                      party = '${args[3]}',
                      location = '${args[4]}',
                      grade_current = '${args[5]}'
                  WHERE
                      politician_id = ${args[6]}`;

        break;
      }
      case "voters" : {
        query =  `UPDATE voters
                  SET first_name = '${args[2]}',
                      last_name = '${args[3]}',
                      gender = '${args[4]}',
                      age = '${args[5]}'
                  WHERE
                      voter_id = ${args[6]}`;
        break;
      }
      case "votes" : {
        query = `UPDATE voters
                  SET voter_id = '${args[2]}',
                      politician_id = '${args[3]}'`;
        break;
      }
    }
  }

  else if(args[0].toUpperCase()  === "DELETE"){
    switch(userInput){
      case "politicians" : {
        query =  `DELETE FROM politicians
                  WHERE
                  politician_id = '${args[2]}'`;

        break;
      }
      case "voters" : {
        query =  `DELETE FROM voters
                  WHERE
                  voter_id = '${args[2]}'`;
        break;
      }
      case "votes" : {
        query = `DELETE FROM votes
                WHERE
                id = '${args[2]}'`;
        break;
      }
    }
  }

  db.run(query, function (err) {
    if (err) throw err;
    console.log('Change successful!');
  });
}


//Query 1
let query1 = `SELECT name, party, grade_current
              FROM politicians
              WHERE party = 'R'
                    AND (grade_current > 9 AND grade_current < 11);`

//Query 2

let query2 = `SELECT COUNT(*) as totalVotes, politicians.name
            FROM politicians
            INNER JOIN votes ON votes.politician_id = politicians.politician_id
            WHERE politicians.name = 'Olympia Snowe';`



//Query 3
let query3 = `SELECT politicians.name,
            COUNT(*) AS "totalVote"
            FROM politicians
            JOIN votes ON votes.politician_id = politicians.politician_id
            WHERE politicians.name LIKE "Adam %"
            GROUP BY politicians.name;`


//Query 4
let query4 = `SELECT COUNT(*) as totalVotes, politicians.name, politicians.party, politicians.location
            FROM votes
            JOIN politicians ON votes.politician_id = politicians.politician_id
            GROUP BY politicians.name
            ORDER BY COUNT(*) DESC
            LIMIT 3;`

//Query 5
let query5 = `SELECT voters.first_name, voters.last_name, voters.gender, voters.age
            FROM votes
            INNER JOIN voters ON votes.voter_id = voters.voter_id
            WHERE votes.politician_id = (SELECT politicians.politician_id FROM politicians
                                         WHERE politicians.name = 'Olympia Snowe');`





let arr = [query1, query2, query3, query4, query5]

for(let i = 0; i < arr.length; i++){
  db.all(arr[i], (err, data) => {
    if (err) {
      throw err;
    }
    console.log("========================");
    console.log("\tQuery" + (i+1))
    console.log("========================");
    data = JSON.stringify(data, null, 2);
    console.log(data);
    console.log("\n");
  });
}




