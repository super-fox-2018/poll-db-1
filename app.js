let Model = require('./model.js');
let Setup = require('./setup.js');
let args = process.argv.slice(2);

let setup = new Setup();
let model = new Model();
let command = args[0];
args = args.slice(1);

switch (command) {
case 'setup':
  setup.start();
  break;
case 'create':
  model.create(args);
  break;
case 'update': // <table_name> <id> <column> <new_record> <column> <new_record> ...
  model.update(args);
  break;
case 'delete':
  model.delete(args);
  break;
default:
  // statements_def
  break;
}
