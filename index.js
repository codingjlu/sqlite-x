const sqlite3 = require("sqlite3");

const run = require("./src/run");
const get = require("./src/get");
const all = require("./src/all");

class Sqlitex {
  constructor() {
    this.db = new sqlite3.Database(...arguments);
  }
}

Sqlitex.prototype.run = run;
Sqlitex.prototype.get = get;
Sqlitex.prototype.all = all;

module.exports = exports = Sqlitex;
