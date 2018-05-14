const fs = require('fs');
const politiciansFile = fs.readFileSync('politicians.csv', 'utf8').split('\n');
const votersFile = fs.readFileSync('voters.csv', 'utf8').split('\n');
const votesFile = fs.readFileSync('votes.csv', 'utf8').split('\n');

module.exports = {politiciansFile, votersFile, votesFile};
