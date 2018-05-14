const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

class Model {
  create(args) {
    let table = args[0];
    let query;
    switch (table) {
    case 'voters':
      query =
      `INSERT INTO voters (first_name, last_name, gender, age)
   		VALUES ('${args[1]}', '${args[2]}', '${args[3]}', '${args[4]}');`;
    break;
    case 'politicians':
      query =
      `INSERT INTO politicians (name, party, location, grade_current)
   		VALUES ('${args[1]}', '${args[2]}', '${args[3]}', '${args[4]}');`;
    break;
    case 'votes':
      query =
      `INSERT INTO votes (voter_id, politician_id)
   		VALUES ('${args[1]}', '${args[2]}');`;
    break;
    default:
      // statements_def
    break;
  }
    db.run(query, function(err) {
      if (err) throw err;
      console.log(`Successfully add a new record to table ${table}`);
    });
  }

  update(args) {
    let table = args[0];
    let query;
    let arrayOfStrings = [];

    for (let i = 2; i < args.length; i += 2) {
      arrayOfStrings.push(`${args[i]} = '${args[i + 1]}'`);
    }

    query = `UPDATE ${table} SET ${arrayOfStrings.join(', ')} WHERE id = ${args[1]};`;
    console.log(query);

    db.run(query, function(err) {
      if (err) throw err;
      console.log(`Successfully update id:${args[1]} in table ${table}`);
    });
  }

  delete(args) {
    let table = args[0];
    let query;
    query = `DELETE FROM ${table} WHERE id=${args[1]}`;
    db.run(query, function(err) {
      if (err) throw err;
      console.log(`Successfully delete record id:${args[1]} in table ${table}`);
    });
  }

  query() {

  }
}

module.exports = Model;
