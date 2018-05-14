const db = require('./setup');

function updateTable(table, id, data) {
    let update = '';
    let query = '';
    let arrQuery = [];
    let where = `WHERE id = ${id}`;
    update = `UPDATE ${table} SET`
    for (let i = 1; i < data.length; i++) {
        let insert = '';
        let record = data[i].split('=')
        insert += `${record[0]} =`;
        insert += (isNaN(record[1])) ? `"${record[1]}"` : record[1];
        arrQuery.push(insert);
    }
    query = update + " " + arrQuery.join(',') + " " + where;

    db.run(query, function (err) {
        if (err) throw err;
        console.log('Successfully update row: ', query);
    })
}

module.exports = updateTable;