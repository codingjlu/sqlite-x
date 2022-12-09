# sqlite-x
A tiny wrapper around the [`sqlite3`](https://npmjs.com/package/sqlite3) package that makes life a lot easier, featuring:
+ Promise-based API
+ Simple and easy to use interface with tagged template literals
+ Automatic parameterizing to prevent SQL injections

If there's something this package can't support, you can access the original node-sqlite3 object via `sqlitexInstance#db`.

### Getting started
Install the package:
```shell
npm i sqlite-x
```
Then require it in your module:
```js
const Sqlitex = require("sqlite-x");
```
### Usage
This is an extension of `sqlite3`, so this package should replicate its behavior. You can access the internal database directly with `Sqlitex#db`.

Use with `async`/`await` and tagged templates.

**Basic usage**
```js
const db = new Sqlitex("./data.db");
await db.run`CREATE TABLE IF NOT EXISTS tbl (
  user varchar(255),
  pass int
)`;

const user = "john", password = 1234;
await db.run`INSERT INTO tbl (user,pass) VALUES (${user},${password})`; // sqlitex auto-parameterizes your template inputs, so no need to worry about SQL injection

const { pass } = await db.get`SELECT pass FROM tbl WHERE user = ${user}`;
console.assert(pass === 1234);
```

**Query multiple**
```js
const paidUsers = await db.all`SELECT * FROM tbl WHERE paid = 1`;
console.log(
  `${paidUsers.length} users have paid for this service:\n\n`,
  paidUsers.map(i => i.user).join("\n")
);
```

### Testing
Jest tests are written for this package. Run them with `npm test`.