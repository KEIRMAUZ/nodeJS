const express = require('express')
const router = express.Router();
const AlumnoController = require('../controllers/alumns.controller')

router 
    .get('/', AlumnoController.get)
    .get('/:id', AlumnoController.getById)
    .post('/', AlumnoController.create)
    .delete('/:id', AlumnoController._delete)
    .patch('/:id', AlumnoController.update);

module.exports = router 