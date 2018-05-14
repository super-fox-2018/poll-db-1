const fs = require('fs');

const politicians = [];
const politiciansRaw = fs.readFileSync('./politicians.csv', 'utf8').split('\n');
for (let i = 1; i < politiciansRaw.length; i += 1) {
  const politicianData = politiciansRaw[i];
  if (politicianData !== '') {
    politicians.push(politicianData.split(','));
  }
}

const voters = [];
const votersRaw = fs.readFileSync('./voters.csv', 'utf8').split('\n');
for (let i = 1; i < votersRaw.length; i += 1) {
  const voterData = votersRaw[i];
  if (voterData !== '') {
    voters.push(voterData.split(','));
  }
}

const votes = [];
const votesRaw = fs.readFileSync('./votes.csv', 'utf8').split('\n');
for (let i = 1; i < votesRaw.length; i += 1) {
  const voteData = votesRaw[i];
  if (voteData !== '') {
    votes.push(voteData.split(','));
  }
}

module.exports = { politicians, voters, votes };