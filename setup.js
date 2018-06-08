//your code here
const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./Database.db')
let fs = require('fs')

db.serialize(function(err){
	db.run(`CREATE TABLE IF NOT EXISTS Politicians
				(
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					name TEXT,
					party TEXT,
					location TEXT,
					grade_curent REAL
				)`)
	db.run(`CREATE TABLE IF NOT EXISTS Voters
		(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			first_name TEXT,
			last_name TEXT,
			gender TEXT,
			age INTEGER
		)`)
	db.run(`CREATE TABLE IF NOT EXISTS Votes
		(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			voterId INTEGER,
			politicianId INTEGER
		)`)
	if (err) {
		throw err
	}
	else{
		console.log('database dibuat')
	}
})

