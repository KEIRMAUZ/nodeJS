const express = require("express");
const alumnnoRouter = require('./alumn.router')

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/alumnos', alumnnoRouter);
    
}

module.exports = routerApi;