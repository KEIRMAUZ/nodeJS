const express = require('express');
const alumnosRouter = require('./alumn.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/alumnos', alumnosRouter);
}

module.exports = routerApi;
