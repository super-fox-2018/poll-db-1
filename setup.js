const db = require('./db');

const queries = [];

queries.push(
  `CREATE TABLE politicians (
    id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name	TEXT NOT NULL,
    party	TEXT NOT NULL,
    location	TEXT NOT NULL,
    grade_current	REAL NOT NULL
  );`
);

queries.push(
  `CREATE TABLE voters (
    id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    first_name	TEXT NOT NULL,
    last_name	TEXT NOT NULL,
    gender	TEXT NOT NULL,
    age	INTEGER NOT NULL
  );`
);

queries.push(
  `CREATE TABLE votes (
    id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    voter_id	INTEGER NOT NULL,
    politician_id	INTEGER NOT NULL,
    CONSTRAINT fk_voter FOREIGN KEY(voter_id) REFERENCES voters(id) ON DELETE CASCADE,
    CONSTRAINT fk_politician FOREIGN KEY(politician_id) REFERENCES politicians(id) ON DELETE CASCADE
  );`
);

for (let i = 0; i < queries.length; i += 1) {
  const query = queries[i];
  db.run(query, (err) => {
    if (err) throw err;
    console.log('Successfully added new table to database!');
  });
}

