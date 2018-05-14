const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./congress_voters.db');

module.exports = db;
