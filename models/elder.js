const db = require('../config/db');

const Elder = {
  getAll: (callback) => {
    db.query('SELECT * FROM elders', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM elders WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { name, age, gender, medical_conditions, contact_info } = data;
    db.query(
      'INSERT INTO elders (name, age, gender, medical_conditions, contact_info) VALUES (?, ?, ?, ?, ?)',
      [name, age, gender, medical_conditions, contact_info],
      callback
    );
  },

  update: (id, data, callback) => {
    const { name, age, gender, medical_conditions, contact_info } = data;
    db.query(
      'UPDATE elders SET name = ?, age = ?, gender = ?, medical_conditions = ?, contact_info = ? WHERE id = ?',
      [name, age, gender, medical_conditions, contact_info, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM elders WHERE id = ?', [id], callback);
  }
};

module.exports = Elder;
