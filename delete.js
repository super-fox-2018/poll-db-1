const db = require('./setup');

function deleteTable(table, id) {
    let del = '';
    let query = '';
    let arrQuery = [];
    let where = `WHERE id = ${id}`;
    del = `DELETE FROM ${table}`;
    query = del + " " + where;

    db.run(query, function (err) {
        if (err) throw err;
        console.log('Successfully delete row: ', query);
    })

}

module.exports = deleteTable;