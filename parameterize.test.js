const parameterize = require("./parameterize");

test("that sql is parameterized", () => {
  const { stmt, params } = parameterize`SELECT * FROM tbl WHERE \`user\` = ${"john"} AND \`password\` = ${12345}`;
  
  expect(stmt).toBe("SELECT * FROM tbl WHERE `user` = ? AND `password` = ?");
  expect(params).toEqual(["john", 12345]);
});
