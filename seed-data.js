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
// 		for(var i=0;i<splitData.length;i++){
// 			split.push(splitData[i].split(','))
// 		}
// 		for(var i=0;i<split.length;i++){
// 				db.run(`INSERT INTO Politicians (id,name,party,location,grade_curent)
// 						VALUES (null,"${split[i][0]}","${split[i][1]}","${split[i][2]}","${split[i][3]}")`)
// 		}
// 		console.log(split)
		
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