const db = require ('./seed-data')
const argv = process.argv.slice(2)
const create = argv[0]
// INSERT NEW DATA POLITICIANS
if(create === "queryPolitician"){
    const queryPolitician = `INSERT INTO politicians (name, party, location, grade_current) VALUES ('${argv[1]}', '${argv[2]}', '${argv[3]}','${argv[4]}')`
    db.run(queryPolitician, function(err){
        if(err) throw err
        console.log('Successfully created a new politicians!');
    })
}

// INSERT NEW DATA VOTERS
else if(create === "queryVoters"){
    const queryVoters = `INSERT INTO voters (first_name, last_name, gender, age) VALUES ('${argv[1]}', '${argv[2]}', '${argv[3]}','${argv[4]}')`
    db.run(queryVoters, function(err){
        if(err) throw err
        console.log('Successfully created a new voters!');
    })
}

// INSERT NEW DATA VOTES
else if(create === "queryVotes"){
    const queryVotes = `INSERT INTO votes (voterId, politicianId) VALUES ('${argv[1]}', '${argv[2]}')`
    db.run(queryVotes, function(err){
        if(err) throw err
        console.log('Successfully created a new votes!');
    })
}
