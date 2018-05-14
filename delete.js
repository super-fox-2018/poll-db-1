const db = require ('./seed-data')
const argv = process.argv.slice(2)
const del = argv[0]
// DELETE DATA POLITICIANS
if(del === "deletePolitician"){
    const deletePolitician = `DELETE FROM politicians WHERE politicianId = ${argv[1]}`;
    db.run(deletePolitician, function(err){
        if(err) throw err
        console.log('The selected politician ID has been delete!');
    })
}

// DELETE DATA VOTERS
else if(del === "deleteVoters"){
    const deleteVoters = `DELETE FROM voters WHERE voterId = ${argv[1]}`;
    db.run(deleteVoters, function(err){
        if(err) throw err
        console.log('The selected voters ID has been delete!');
    })
}

// DELETE DATA VOTES
else if(del === "deleteVotes"){
    const deleteVotes = `DELETE FROM votes WHERE id = ${argv[1]}`;
    db.run(deleteVotes, function(err){
        if(err) throw err
        console.log('The selected votes ID has been delete!');
    })
}