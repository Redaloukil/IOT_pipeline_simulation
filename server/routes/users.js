const express = require('express')

const userRoutes = express.Router();
const userController = require('../controllers/user');

userRoutes.route('/users/')
    .post(userController.createUser);

userRoutes.route('/users/:id')
    .get(userController.getUserById)
    
// userRoutes.route('/users/authenticate')
//     .post();
    


module.exports = userRoutes;