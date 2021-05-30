const express = require('express');
const { uniqueValue } = require('../validators/uniqueValue');
const { User } = require('../models/user');

const userRoutes = express.Router();
const userController = require('../controllers/user');

userRoutes.route('/users/').get(userController.getAllUsers);
userRoutes.route('/users/').post(uniqueValue(User, 'username'),userController.createUser);
userRoutes.route('/users/:id').get(userController.getUserById);
userRoutes.route('/users/authenticate').post(userController.loginUser);
    


module.exports = userRoutes;