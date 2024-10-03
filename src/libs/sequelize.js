const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(config.databaseUrl, {
    dialect: 'postgres',
    logging: false 
});

sequelize.sync();

setupModels(sequelize);
module.exports = sequelize;
