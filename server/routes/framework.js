const express = require('express');

const frameworkRoutes = express.Router();

frameworkRoutes.route('/frameworks/')
    .post()

frameworkRoutes.route('/frameworks/id')
    .get()



  

module.exports = frameworkRoutes;