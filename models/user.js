const db = require('../config/db');

const User = {
  create: (username, email, password, role) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
      db.query(sql, [username, email, password, role], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) reject(err);
        resolve(results[0]); // get single user
      });
    });
  }
};

module.exports = User;
