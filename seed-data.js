const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./Database.db')

const fs = require('fs')

function readFile(file,cb){
	fs.readFile(file,'utf8',(err,data)=>{
		if (err) {
			throw err
		}
		else{
		cb(data)
		}
	})
}
// readFile('./politicians.csv',(data)=>{
// 	let splitData = ''
// 	let split = []
// 		console.log('membaca data')
// 		for(var i=0;i<data.length;i++){
// 			splitData = data.split("\n")
// 		}
// 		for(var i=1;i<splitData.length;i++){
// 			split.push(splitData[i].split(','))
// 		}

// 		db.serialize(function() {
// 			for(var i=0;i<split.length;i++){
// 				db.run(`INSERT INTO Politicians (id,name,party,location,grade_curent)
// 						VALUES (null,"${split[i][0]}","${split[i][1]}","${split[i][2]}","${split[i][3]}")`)
// 			}	
// 		})
		
// 		// console.log(split.length)
		
// })
// readFile('./voters.csv',(data)=>{
// 	let splitData = ''
// 	let split = []
// 		console.log('membaca data')
// 		for(var i=0;i<data.length;i++){
// 			splitData = data.split("\n")
// 		}
// 		for(var i=1;i<splitData.length;i++){
// 			split.push(splitData[i].split(','))
// 		}
// 		for(var i=0;i<split.length;i++){
// 				db.run(`INSERT INTO Voters (id,first_name,last_name,gender,age)
// 						VALUES (null,"${split[i][0]}","${split[i][1]}","${split[i][2]}","${split[i][3]}")`,function(err){
// 							if (err) {throw err}
// 								else{
// 									console.log('selesai')
// 								}
// 						})
// 		}
// 		//console.log(split)
		
// })
// readFile('./votes.csv',(data)=>{
// 	let splitData = ''
// 	let split = []
// 		console.log('membaca data')
// 		for(var i=0;i<data.length;i++){
// 			splitData = data.split("\n")
// 		}
// 		for(var i=1;i<splitData.length;i++){
// 			split.push(splitData[i].split(','))
// 		}
// 		for(var i=0;i<split.length;i++){
// 				db.run(`INSERT INTO Votes (id,voterId,politicianId)
// 						VALUES (null,"${split[i][0]}","${split[i][1]}")`,function(err){
// 							if (err) {throw err}
// 								else{
// 									console.log('seeding data')
// 								}
// 						})
// 		}
// 		//console.log(split)
		
// })

// function insertPolitician(file,name,party,location,grade){
// 		db.run(`INSERT INTO Politicians (id,name,party,location,grade_curent)
// 						VALUES (null,"${name}","${party}","${location}","${grade}")`)
// }
// function deletePolitician(file,id) {
// 	/* body... */
// 		db.run(`DELETE FROM Politicians WHERE id = ${id}`)
// }
// function updatePolitician(file,id,name,party,location,grade){
// 		db.run(
// 			`UPDATE Politicians 
// 			SET 
// 			name=${name},
// 			party=${party},
// 			location=${location},
// 			grade_curent=${grade}
// 			WHERE id=${id}
// 			`)
// }

// db.all(`SELECT name,party,grade_curent FROM Politicians WHERE party="R" AND grade_curent BETWEEN 9 AND 11`,(err,data)=>{
// 	if (err) {throw  err}
// 		else{
// 			console.log(data)
// 		}
// })
// db.all(`select count(*) as totalVote,(select name from Politicians where name="Olympia Snowe") AS 
// 	politicianName from votes where politicianId IN(
// 	select id from Politicians where name = "Olympia Snowe")`,(err,data)=>{
// 	console.log(data)
// })

// db.all(`SELECT name,count(*) AS totalVote  FROM votes LEFT JOIN Politicians ON   
// Politicians.id = Votes.politicianId WHERE Politicians.name LIKE '%Adam%' GROUP BY name`,function(err,data) {
// 		if(err) {
// 			throw err
// 		}

// 		console.log(data)
// })


// db.all(`SELECT COUNT(*) AS totalVote,name,party,location FROM Votes JOIN Politicians 
// ON Politicians.id = Votes.politicianId GROUP BY name ORDER BY totalVote DESC LIMIT 3`,function(err,data) {
// 		if(err) {
// 			throw err
// 		}

// 		console.log(data)
// })


	db.all(`SELECT first_name,last_name,gender,age FROM Votes LEFT JOIN Voters ON 
	Votes.voterId = Voters.id LEFT JOIN Politicians ON Votes.politicianId = Politicians.id 
	WHERE Politicians.name = 'Olympia Snowe' GROUP BY Voters.first_name`,function(err,data) {
		if(err) {
			throw err
		}
		console.log(data)
})
