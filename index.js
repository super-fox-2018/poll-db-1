const insertData = require('./crud/insert');
const updateData = require('./crud/update');
const deleteData = require('./crud/delete');
const Parser = require('./argv-parser');

const argv = Parser.parse(process.argv);

switch(argv.menu) {
  case 'insert':
    insertData(argv.table, argv.data);
    break;
  case 'update':
    updateData(argv.table, argv.data);
    break;
  case 'delete':
    deleteData(argv.table, argv.data);
    break;
}