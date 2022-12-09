const Sqlitex = require("./index");

const db = new Sqlitex("./test.db");

test("that the db started", () => {
  expect(db).toBeDefined();
});

describe("database transactions", () => {
  it("should create a table", () => {
    return expect(db.run`CREATE TABLE IF NOT EXISTS \`tbl\` (
      user varchar(255),
      pass int
    )`).resolves.not.toThrow();
  });

  it("should insert values", () => {
    return expect(db.run`INSERT INTO tbl(user,pass) VALUES (${"john"},${1234})`).resolves.not.toThrow();
  });

  it("should query values", async () => {
    const result = await db.get`SELECT pass FROM tbl WHERE user = ${"john"}`;
    expect(result.pass).toBe(1234);
  });
});

afterAll(async () => {
  await db.run`DROP TABLE tbl`;
  return;
});
