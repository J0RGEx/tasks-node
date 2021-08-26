const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const proyectos = require('../controllers/proyectoscontroller');
const tareas =  require('../controllers/tareascontroller');

module.exports = function(){

    router.get('/', proyectos.index);
    router.get('/nosotros', proyectos.nosotros);

    router.get('/proyectos/create', proyectos.create)
    router.post('/proyectos/store', body('name').not().isEmpty().trim().escape(), proyectos.store);
    router.get('/proyectos/:url', proyectos.details);
    router.get('/proyectos/:url/edit', proyectos.edit);
    router.post('/proyectos/update/:id', body('name').not().isEmpty().trim().escape(), proyectos.update)
    router.delete('/proyectos/:id/delete', proyectos.delete);

    router.post('/proyectos/:id/tareas', body('name').not().isEmpty().trim().escape(), tareas.store);

    return router;
}