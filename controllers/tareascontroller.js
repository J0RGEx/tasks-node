const Proyecto = require('../models/Proyecto');
const Tarea = require('../models/Tarea');

exports.store = async (req, res) => {

    const { name, url } = req.body;
    const id = req.params.id;

    console.log(id, url, name)
    
    let errors = [];
    if(!id){
        res.redirect(`back`);
    }
    if(!url){
        res.redirect(`back`);
    }
    if(!name){
        errors.push({msg: 'El campo Nombre es requerido'});
        res.redirect(`back`);
    }else{
        const tarea = await Tarea.create({
            name, estado: 0, proyectoId: id
        });
        res.redirect('back');
    }
}
