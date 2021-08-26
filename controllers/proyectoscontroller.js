const Proyecto =  require('../models/Proyecto');
const Tarea = require('../models/Tarea');

exports.index = async (req, res) => {
    res.render("index");
};

exports.nosotros = (req, res) => {
    res.render("nosotros");
};

exports.create = (req, res) => {
    res.render("proyectos/create");
}

exports.store = async (req, res) => {

    const name = req.body.name;
    let errors = [];
    if(!name){
        errors.push({'msg': "Campo Nombre es requerido"})
    }
    if(errors.length > 0){
        res.render("proyectos/create", {
            errors
        });
    }else{
        await Proyecto.create({
            name
        });
        res.redirect('/');
    }
}

exports.details = async (req, res) => {

    const url = req.params.url;
    const proyecto = await Proyecto.findOne({
        where: {
            url
        }
    });
    
    const tareas = await Tarea.findAll({ where: { proyectoId: proyecto.id }}) 

    res.render("proyectos/details", {
        proyecto, tareas
    });
}

exports.edit = async (req, res) => {
    const url = req.params.url;
    const proyecto = await Proyecto.findOne({
        where: {
            url
        }
    });

    res.render("proyectos/edit", {
        proyecto
    });
}

exports.update = async (req, res) => {

    const name = req.body.name;
    const id = req.params.id;
    let errors = [];

    if(errors.length > 0){
        res.render("proyectos/edit", {
            errors
        });
    }else{
       await Proyecto.update({
            name
        }, { where: { id } }
        );
        res.redirect('/');
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log('ID', id);
    const proyecto = await Proyecto.destroy({
        where: {
            id
        }
    });
    res.json({message: "Proyecto Eliminado"});
}