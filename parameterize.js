module.exports = function parameterize(pcs, ...params) {
  const stmt = pcs.join("?");
  return {
    stmt,
    params
  };
}
