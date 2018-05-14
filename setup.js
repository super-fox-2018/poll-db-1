//your code here
const fs = require("fs")
const db    = require('./seed-data.js');


//Insert, Update and Delete data into/from DB

const args  = process.argv.slice(2);
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






