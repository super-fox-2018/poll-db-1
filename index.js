const insertTable = require('./insert.js');
const updateTable = require('./update.js');
const deleteTable = require('./delete.js');


const param1 = process.argv[2];
const param2 = process.argv[3];
const param3 = process.argv[4];
const arrParam3 = process.argv.slice(4);

switch(param1){
    case 'insert':
    if (param2){
        insertTable(param2, arrParam3);
    }
    break;
    case 'update':
    if (param2 && arrParam3.length !==0){
        updateTable(param2, param3, arrParam3);
    }
    break;
    case 'delete':
    if (param3){
        deleteTable(param2, param3)
    }
    break;
    default:
}

