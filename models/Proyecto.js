const Sequelize = require('sequelize');
const slug = require('slug');
const shortid = require('shortid');

const db = require('../config/db');


const Proyecto = db.define('proyecto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    }
}, {
    hooks: {
        beforeCreate(proyecto){
            const url = slug(proyecto.name).toLowerCase();
            proyecto.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = Proyecto;