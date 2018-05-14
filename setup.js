//your code here


const db = require('./db')
const argv = process.argv
const fs = require ('fs')

const politician = fs.readFileSync('./politicians.csv', 'utf8').split("\r\n")
let politicianSplit = []
for(let a=1; a<politician.length; a++) {
    politicianSplit.push(politician[a].split(","))
}

const voters = fs.readFileSync('./voters.csv', 'utf8').split("\r\n")
let votersSplit = []
for(let b=1; b<voters.length; b++) {
    votersSplit.push(voters[b].split(","))
}

const votes = fs.readFileSync('./votes.csv', 'utf8').split("\r\n")
let votesSplit = []
for(let c=1; c<votes.length; c++) {
    votesSplit.push(votes[c].split(","))
}

class Control {
    constructor () {}

    createPolitician (name, party, location, current_grade) {
        const query = `INSERT INTO politicians (name, party, location, current_grade)
                        VALUES ('${name}', '${party}', '${location}', '${current_grade}')`;

    db.run(query, function (err) {
    if (err) throw err;
    console.log('Successfully created a new politician!');
    });
    }
    injectPolitician () {
        for(let x=0; x<politicianSplit.length; x++) {
            let pol = politicianSplit[x]
            this.createPolitician (pol[0], pol[1], pol[2], pol[3])
        }
    }

    createVoters (fname, lname, gender, age) {
        const query2 = `INSERT INTO voters (first_name, last_name, gender, age)
                        VALUES ('${fname}', '${lname}', '${gender}', '${age}')`;

    db.run(query2, function (err) {
    if (err) throw err;
    console.log('Successfully created a new voter!');
    });
    }
    injectVoters () {
        for(let y=0; y<votersSplit.length; y++) {
            let pol2 = votersSplit[y]
            this.createVoters (pol2[0], pol2[1], pol2[2], pol2[3])
        }
    }

    createVotes (voterID, politicianID) {
        const query3 = `INSERT INTO votes (voters_id, politician_id)
                        VALUES ('${voterID}', '${politicianID}')`;

    db.run(query3, function (err) {
    if (err) throw err;
    console.log('Successfully created a new votes!');
    });
    }
    injectVotes () {
        for(let z=0; z<votesSplit.length; z++) {
            let pol3 = votesSplit[z]
            this.createVotes (pol3[0], pol3[1], pol3[2], pol3[3])
        }
    }

    readPolitician () {
        db.all(`SELECT * FROM politicians`, function (err,politician) {
        if (err) throw err
        console.log(politician) 
        });
    }

    updatePolitician (id, name, party, location, current_grade) {
        const query4 = `UPDATE politician
               SET name             ='${name}',
                   party            ='${party}',
                   location         ='${location}',
                   current_grade    ='${current_grade}'
               WHERE id=${id}`;

        db.run(query4, function (err) {
        if (err) throw err;
        console.log('Successfully updated!');
        });

    }

    deletePolitician () {
        const query6 = `DELETE FROM politician WHERE id = ${argv[3]}`

        db.run(query6, function (err) {
            if (err) throw err
            console.log('Successfully deleted!')
        })
    }

}
const control = new Control

if(argv[2] === undefined) {
    console.log(' ')
} else if(argv[2] === 'createpolitician') {
    control.createPolitician(argv[3], argv[4], argv[5], argv[6])
} else if(argv[2] === 'readpolitician') {
    control.readPolitician() // 
} else if(argv[2] === 'updatepolitician') {
    control.updatePolitician(argv[3], argv[4], argv[5], argv[6], argv[7])
} else if(argv[2] === 'deletepolitician') {
    control.deletePolitician(argv[3]) // id
} else if(argv[2] === 'createvoters') {
    
} else if(argv[2] === 'readvoters') {
    
} else if(argv[2] === 'updatevoters') {
    
} else if(argv[2] === 'deletevoters') {
    
} else if(argv[2] === 'injectpolitician') {
    control.injectPolitician ()
} else if(argv[2] === 'injectvoters') {
    control.injectVoters ()
} else if(argv[2] === 'injectvotes') {
    control.injectVotes ()
}


// RELEASE 3

db.all(`SELECT * FROM politicians
        WHERE current_grade >= 9 
        AND current_grade <= 11`, function (err,politician) {
    if (err) throw err
    console.log(politician) 
    });

db.all(`SELECT * FROM politicians
    WHERE current_grade >= 9 
    AND current_grade <= 11`, function (err,politician) {
    if (err) throw err
    console.log(politician) 
    });

