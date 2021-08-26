const { Sequelize } = require('sequelize');

// Passing parameters separately (other dialects)
const sequelize = new Sequelize('tasks', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  logging: false
});

module.exports = sequelize;