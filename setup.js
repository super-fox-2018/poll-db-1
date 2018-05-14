//your code here
"use strict"
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs')
let db = new sqlite3.Database('./pollDB1.db');

fs.readFile('politicians.csv','utf-8',(err,data)=>{
    data = data.split('\n')
    data.splice(data.length-1,1)
    for(let i = 1; i < data.length; i++){
        data[i] = data[i].split(',')
        for(let j = 0; j < data[i].length; j++){
            if(isNaN(+data[i][j])){
                data[i][j]=`"${data[i][j]}"`
            }
        }
        data[i] = data[i].join(',')
        console.log(data[i])
        db.run(`INSERT INTO politicians (${data[0]}) VALUES(${data[i]})`,(data,err)=>{
            if(err) console.log(err);
        })
    }
})
fs.readFile('voters.csv','utf-8',(err,data)=>{
    data = data.split('\n')
    data.splice(data.length-1,1)
    for(let i = 1; i < data.length; i++){
        data[i] = data[i].split(',')
        for(let j = 0; j < data[i].length; j++){
            if(isNaN(+data[i][j])){
                data[i][j]=`"${data[i][j]}"`
            }
        }
        data[i] = data[i].join(',')
        db.run(`INSERT INTO voters (${data[0]}) VALUES(${data[i]})`,(data,err)=>{
            if(err) console.log(err);
            // console.log(data)
        })
    }
})
fs.readFile('votes.csv','utf-8',(err,data)=>{
    data = data.split('\n')
    data.splice(data.length-1,1)
    for(let i = 1; i < data.length; i++){
        db.run(`INSERT INTO votes (${data[0]}) VALUES(${data[i]})`,(data,err)=>{
            if(err) console.log(err);
            // console.log(data)
        })
    }
    
})

