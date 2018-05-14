const db = require('./../db');

function deleteData(tableName, data) {
  const tableList = ['politicians', 'voters', 'votes'];
  if (!tableList.includes(tableName)) {
    console.log('Table not found!');
    return;
  }
  let query = `DELETE FROM ${tableName} WHERE id = ${data.id};`;
  db.run(query, (err) => {
    if (err) throw err;
    console.log(`Successfully deleted data with id : ${data.id} in ${tableName} table`);
  });
}

module.exports = deleteData;