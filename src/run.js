const parameterize = require("../parameterize");

module.exports = function run(str, ...interpolations) {
  const { stmt, params } = parameterize.call(this, str, ...interpolations);
  const { db } = this;

  return new Promise((resolve, reject) => {
    db.run(stmt, params, err => {
      if(err) {
        return reject(err);
      }
      resolve();
    });
  });
}
