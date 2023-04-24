var mysql = require("mysql2");
var config = require("../config/default.js");

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
});

// let query = (sql, values) => {
//   return new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         reject(err);
//       } else {
//         connection.query(sql, values, (err, rows) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(rows);
//           }
//           connection.release();
//         });
//       }
//     });
//   });
// };

class Mysql {
  constructor() {}
  query(_sql) {
    return new Promise((resolve, reject) => {
      pool.query(_sql, function (error, results, fields) {
        if (error) {
          throw error;
        }
        resolve(results);
        // console.log('The solution is: ', results[0].solution);
      });
    });
  }
}
module.exports = new Mysql();