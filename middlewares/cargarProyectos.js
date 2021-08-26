const Proyecto =  require('../models/Proyecto');

const cargarProyectos = async (req, res, next) => {
    const proyectos = await Proyecto.findAll();
    res.locals.proyectos = proyectos;
    next();
}
module.exports = cargarProyectos;