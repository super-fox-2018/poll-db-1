const db = require ('./seed-data')
const argv = process.argv.slice(2)
const update = argv[0]
// UPDATE DATA POLITICIANS
if(update === "updatePolitician"){
    const updatePolitician = `UPDATE politicians SET name = '${argv[2]}',
                                                    party = '${argv[3]}',
                                                location = '${argv[4]}',
                                            grade_current = '${argv[5]}'
                                        WHERE politicianId = ${argv[1]}`;
    db.run(updatePolitician, function(err){
        if(err) throw err
        console.log('Politicians list has been updated!');
    })
}

// UPDATE DATA VOTERS
else if(update === "updateVoters"){
    const updateVoters = `UPDATE voters SET first_name = '${argv[2]}',
                                                last_name = '${argv[3]}',
                                                gender = '${argv[4]}',
                                                    age = '${argv[5]}'
                                                WHERE voterId = ${argv[1]}`;
    db.run(updateVoters, function(err){
        if(err) throw err
        console.log('Voters list has been updated!');
    })
}

// UPDATE DATA VOTES
else if(update === "updateVotes"){
    const updateVotes = `UPDATE votes SET voterId = '${argv[2]}',
                                                politicianId = '${argv[3]}'
                                                WHERE id = ${argv[1]}`;
    db.run(updateVotes, function(err){
        if(err) throw err
        console.log('Votes list has been updated!');
    })
}