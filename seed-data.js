var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./polldb-1.db');
var fs = require("fs")


class Seed {


	static readFiles(file,cb) {

		fs.readFile(file,"utf-8",function(err,data) {
					
			if(err) {
				throw err
			}
			var splitData = data.split("\n") 
			cb(splitData)

		})
	}


	static insertPolitician() {
		Seed.readFiles("./politicians.csv",function(dataPoliticians){
			var result=[]
			for(let i=1;i<dataPoliticians.length;i++) {
				var obj={}
				obj.name = dataPoliticians[i].split(",")[0]
				obj.party = dataPoliticians[i].split(",")[1] 
				obj.location = dataPoliticians[i].split(",")[2]
				obj.grade_current = dataPoliticians[i].split(",")[3]
				result.push(obj)
			}
			console.log(result)
			db.serialize(function() {
				for(let i=0;i<result.length;i++) {
					db.run(`INSERT INTO politicians VALUES(null,'${result[i].name}','${result[i].party}','${result[i].location}','${result[i].grade_current}')`,function(err) {
						if (err) {
							throw err
						}
					})
				}	
			})
		})
	}


	static insertVoter() {
		Seed.readFiles("./voters.csv",function(dataVoters){
			var result=[]
			for(let i=1;i<dataVoters.length;i++) {
				var obj={}
				obj.first_name = dataVoters[i].split(",")[0]
				obj.last_name = dataVoters[i].split(",")[1] 
				obj.gender = dataVoters[i].split(",")[2]
				obj.age = dataVoters[i].split(",")[3]
				result.push(obj)
			}
			console.log(result)
			db.serialize(function() {
				for(let i=0;i<result.length;i++) {
					db.run(`INSERT INTO voters VALUES(null,'${result[i].first_name}',"${result[i].last_name}",'${result[i].gender}','${result[i].age}')`)
				}	
			})
			
		})
	}

	static insertVote() {
		Seed.readFiles("./votes.csv",function(dataVotes){
			var result=[]
			for(let i=1;i<dataVotes.length;i++) {
				var obj={}
				obj.voter_id = dataVotes[i].split(",")[0]
				obj.politician_id = dataVotes[i].split(",")[1] 
				result.push(obj)
			}
			console.log(result)
			db.serialize(function() {
				for(let i=0;i<result.length;i++) {
					db.run(`INSERT INTO votes(voter_id,politician_id) VALUES('${result[i].voter_id}',"${result[i].politician_id}")`)
				}	
			})
			
		})
	}

}

class CRUD {

	static insertPolitician(name,party,location,grade_current) {
		db.run(`INSERT INTO politicians VALUES(null,"${name}","${party}","${location}","${grade_current}")`)
	}

	static insertVoter(first_name,last_name,gender,age) {
		db.run(`INSERT INTO voters VALUES(null,"${first_name}","${last_name}","${gender}","${age}")`)
	}

	static insertVote(voter_id,politician_id) {
		db.run(`INSERT INTO votes VALUES(null,"${voter_id}","${politician_id}")`)	
	}

	static update(table,param,value,id) {
		db.run(`UPDATE "${table}" SET "${param}" = "${value}" WHERE id = ${id}`)
	}

	static delete(table,id) {
		db.run(`DELETE FROM "${table}" WHERE id = "${id}"`)
	}

}

// Seed.insertPolitician()
// Seed.insertVoter()
// Seed.insertVote()

  // CRUD.insertVoter("Bram","Duwita","Female",21)

 // CRUD.update("voters","first_name","Diego",151)

 // CRUD.delete("politicians",22)

function nomor_1() {
	let query = "SELECT name,party,grade_current FROM politicians WHERE party = 'R' AND grade_current BETWEEN 9 AND 11";
	db.all(query,function(err,rows) {
		if(err) {
			throw err
		}
		console.log(rows)
	})
}

function nomor_2() {
	let query = "SELECT COUNT(*)AS totalVote,name  FROM votes JOIN politicians ON votes.politician_id = politicians.id WHERE name = 'Olympia Snowe'"

	db.all(query,function(err,rows) {
		if(err) {
			throw err
		}

		console.log(rows)
	})
}

function nomor_3() {
	let query = "SELECT name,count(*) AS totalVote  FROM votes LEFT JOIN politicians ON   politicians.id = votes.politician_id WHERE politicians.name LIKE '%Adam%' GROUP BY name"

	db.all(query,function(err,rows) {
		if(err) {
			throw err
		}

		console.log(rows)
	})
}

function nomor_4() {
	let query = "SELECT COUNT(*) AS totalVote,name,party,location FROM votes JOIN politicians ON politicians.id = votes.politician_id GROUP BY name ORDER BY totalVote DESC LIMIT 3"

	db.all(query,function(err,rows) {
		if(err) {
			throw err
		}

		console.log(rows)
	})
}

function nomor_5() {
	let query = 
	"SELECT first_name,last_name,gender,age FROM votes LEFT JOIN voters ON votes.voter_id = voters.id LEFT JOIN politicians ON votes.politician_id = politicians.id WHERE politicians.name = 'Olympia Snowe' GROUP BY voters.first_name"

	db.all(query,function(err,rows) {
		if(err) {
			throw err
		}
		console.log(rows)
	})
}

// nomor_1();
// nomor_2();
// nomor_3();
// nomor_4()
nomor_5()