const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        msg: '´put API - Controller',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
