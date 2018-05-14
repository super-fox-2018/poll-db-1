const db = require('./../db');

function updateData(tableName, data) {
  const tableList = ['politicians', 'voters', 'votes'];
  if (!tableList.includes(tableName)) {
    console.log('Table not found!');
    return;
  }
  let query = `UPDATE ${tableName} SET `;
  const keys = Object.keys(data).slice(1);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    query += `${key} = '${data[key]}'`;
    if (i < keys.length - 1) query += ',';
    else query += ' ';
  }

  query += `WHERE id = ${data.id};`;
  console.log(query);
  db.run(query, (err) => {
    if (err) throw err;
    console.log(`Successfully updated data with id : ${data.id} in ${tableName} table`);
  });
}

module.exports = updateData;