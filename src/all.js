const parameterize = require("../parameterize");

module.exports = function all(str, ...interpolations) {
  const { stmt, params } = parameterize.call(this, str, ...interpolations);
  const { db } = this;

  return new Promise((resolve, reject) => {
    db.all(stmt, params, (err, rows) => {
      if(err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}
