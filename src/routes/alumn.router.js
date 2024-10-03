const express = require('express')
const router = express.Router();
const AlumnoController = require('../controllers/alumns.controller')

router 
    .get('/alumnos', AlumnoController.get)
    .get('/alumnos/:id', AlumnoController.getById)
    .post('/alumnos', AlumnoController.create)
    .delete('/alumnos/:id', AlumnoController._delete)
    .patch('/alumnos', AlumnoController.update);

module.exports = router