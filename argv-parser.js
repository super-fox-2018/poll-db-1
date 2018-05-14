class Parser {
  static parse(argv) {
    const obj = {};
    obj.menu = argv[2];
    obj.table = argv[3];
    obj.data = {}
    for (let i = 4; i < argv.length; i += 1) {
      const str = argv[i];
      if (str.slice(0,2) === '--') {
        obj.data[str.slice(2)] = argv[i+1];
      }
    }
    return obj;
  }
}

module.exports = Parser;