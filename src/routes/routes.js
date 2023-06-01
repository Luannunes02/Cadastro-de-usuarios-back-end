const express = require('express');
const routes = express.Router(); 

const usuarioController = require('../controllers/usuarioController');

routes.post(`/usuarios`, usuarioController.insert); // executa o insert do controlador usuario

routes.get('/usuarios', usuarioController.index); // executa o metodo get que no usuariocontroller está com nome index

routes.get('/usuarios/:id', usuarioController.detail); // exemplo de acesso = http://localhost:3201/sistema/usuarios/63fd3993db3066adf68be0dc

routes.put('/usuarios/:id', usuarioController.update);

routes.delete('/usuarios/:id', usuarioController.delete);

module.exports = routes;