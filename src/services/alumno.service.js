const {models} = require('../libs/sequelize');

class AlumnoService {
    constructor() {}

    async getAlumnos(){
        const alumnos = await models.Alumno.findAll();
        return alumnos
    }

    async getAlumno(id){
        const alumno = await models.Alumno.findByPk(id)
        return alumno;
    }

    async crearAlumno(data){
        const creadoAlumno = await models.Alumno.create(data);
        return creadoAlumno
    }

    async updateAlumno(id, data){
        const model = await this.findOne(id);
        const actualizar = await model.update(data)
        return actualizar
    }

    async delete(id){
        const model = await this.findOne(id);
        await model.destroy();
        return {deleted:true};
    }
}

module.exports = AlumnoService