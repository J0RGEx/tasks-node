const Sequelize = require('sequelize');
const db  = require('../config/db');
const Proyecto = require('./Proyecto');

const Tarea = db.define('tareas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    estado: Sequelize.STRING(100)
});

Tarea.belongsTo(Proyecto);

module.exports = Tarea;