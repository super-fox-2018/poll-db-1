const db = require('./../db');

function insertData(tableName, data) {
  let query = `INSERT INTO ${tableName} `;
  switch(tableName) {
    case 'politicians':
      query += `(name, party, location, grade_current) VALUES
                ("${data.name}", "${data.party}", "${data.location}", ${data.grade_current});`;
      break;
    case 'voters':
      query += `(first_name, last_name, gender, age) VALUES
                ("${data.first_name}", "${data.last_name}", "${data.gender}", ${data.age});`;
      break;
    case 'votes':
      query += `(voter_id, politician_id) VALUES
                (${data.voter_id}, ${data.politician_id});`;
      break;
    default:
      console.log('Table not found');
      return;
  }
  db.run(query, (err) => {
    if (err) throw err;
    console.log(`Successfully added new data to ${tableName}`);
  });
}

module.exports = insertData;