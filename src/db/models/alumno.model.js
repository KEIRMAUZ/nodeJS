const {Model, DataTypes} = require('sequelize')

const ALUMN_TABLE = 'alumnos'

class Alumno extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: ALUMN_TABLE,
            modelName: 'Alumno',
            timestamps:true
        }
    }
}

const AlumnoSchema = {
    id_alumno:{
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    lastname:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'lastname'
    },
    phone:{
        allowNull:true,
        type: DataTypes.INTEGER,
        field: 'phone'
    }
}

module.exports = {Alumno, AlumnoSchema}