const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./poll_db_1.db');

module.exports = database;
