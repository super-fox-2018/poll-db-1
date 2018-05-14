//your code here
const fs = require('fs');
const database = require('./database.js');

database.serialize(function(err){
  var politiciansConvert = fs.readFileSync('./politicians.csv','utf8').split('\n');
  politiciansConvert.splice(politiciansConvert.length-1,1);
  for (var i = 1; i < politiciansConvert.length; i++) {
    var data =  politiciansConvert[i].split(',');
    var politicians = `INSERT INTO politicians(name,party,location, grade_current) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`;

    database.run(politicians, function(err){
      if(err) throw err;
      console.log("successfully created a new row");
    });
  };
})

database.serialize(function(err){

  var votesConvert = fs.readFileSync('./votes.csv','utf8').split('\n');
  votesConvert.splice(votesConvert.length-1,1);
  for (var j = 1; j < votesConvert.length; j++) {
    var data =  votesConvert[j].split(',');
    var votes = `INSERT INTO votes(voters_id,politicians_id) VALUES ("${data[0]}","${data[1]}")`;

    database.run(votes, function(err){
      if(err) throw err;
      console.log("successfully created a new row");
    });
  };
})

database.serialize(function(err){

  var votersConvert = fs.readFileSync('./voters.csv','utf8').split('\n');
  votersConvert.splice(votersConvert.length-1,1);
  for (var k = 1; k < votersConvert.length; k++) {
    var data =  votersConvert[k].split(',');

    var voters = `INSERT INTO voters(first_name,last_name,gender, age) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`;

    database.run(voters, function(err){
      if(err) throw err;
      console.log("successfully created a new row");
    });
  };
})
