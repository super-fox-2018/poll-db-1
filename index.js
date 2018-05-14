const insertData = require('./crud/insert');
const updateData = require('./crud/update');
const deleteData = require('./crud/delete');
const Parser = require('./argv-parser');

const argv = Parser.parse(process.argv);


// RELEASE 2
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
  default:
    const helps = [
      ['update', '[table-name] --id [id] [--column-name] [new-value]...'],
      ['insert', '[table-name] [--column-name] [value]...'],
      ['delete', '[table-name] --id [id]']
    ];
    for (let i = 0; i < helps.length; i += 1) {
      const help = helps[i];
      console.log(`${help[0]} : usage > ${help[1]}`);
    }
}

// RELEASE 3 
require('./crud/read');

