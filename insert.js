const db = require('./setup');

function insertTable(table, data){
    let query = '';
    if (table === 'candidate'){
        query = `INSERT INTO ${table} (name,party,location,grade_current) `
        query +=`VALUES ("${data[0]}","${data[1]}","${data[2]}", ${data[3]});`
        console.log(query);
    }

    if (table === 'voters'){
        query = `INSERT INTO ${table} (first_name,last_name,gender,age) `
        query +=`VALUES ("${data[0]}","${data[1]}","${data[2]}", ${data[3]});`
        console.log(query)
    }
    if (table === 'voter_candidate'){
        query = `INSERT INTO ${table} (voter_id,candidate_id) `
        query += `VALUES (${data[0]},${data[1]});`
        console.log(query)
    }
    db.run(query, function (err){
        if (err) throw err;
        console.log('Successfully create a new row', query);
    })
}


module.exports = insertTable;