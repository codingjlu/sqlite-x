const parameterize = require("../parameterize");

module.exports = function get(str, ...interpolations) {
  const { stmt, params } = parameterize.call(this, str, ...interpolations);
  const { db } = this;

  return new Promise((resolve, reject) => {
    db.get(stmt, params, (err, result) => {
      if(err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}
