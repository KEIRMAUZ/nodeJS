const { response } = require('express');
const AlumnoService = require('../services/alumno.service')
const service = new AlumnoService();

const create = async (req, res) => {
    try{
        service.crearAlumno(req.body);
        res.json({success: true, data: response});
    } catch(error){
        res.status(500).send({success: false, message: error.message})
    }
}

const get = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await service.getAlumnos();
        res.json(response);
    } catch(error){
        res.status(500).send({success: false, message: error.message});
    }
}

const getById = async (req, res)=>{
    try{
        const response = await service.getAlumno(id);
        res.json(response)
    } catch(error){
        res.status(500).send({success: false, message: error.message});
    }
}

const update = async (req,res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const response = await service.updateAlumno(id, body);
        res.json(response);
    }catch(error){
        res.status(500).send({success: false, message: error.message});
    }
}

const _delete = async (req, res)=> {
    try{
        const {id} = req.params;
        const response = await service.delete(id);
        res.json(response);
    } catch(error){
        res.status(500).send({success: false, message: error.message});
    }
}

module.exports = {
    create, get, _delete, getById, update
}