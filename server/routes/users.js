const express = require('express');
const { uniqueValue } = require('../validators/uniqueValue');
const { User } = require('../models/user');

const userRoutes = express.Router();
const userController = require('../controllers/user');
const {authentication} = require('../validators/authentication');

userRoutes.route('/users/').get(authentication,userController.getAllUsers);
userRoutes.route('/users/').post(uniqueValue(User, 'username'),userController.createUser);
userRoutes.route('/users/:id').get(authentication,userController.getUserById);
userRoutes.route('/users/authenticate').post(userController.loginUser);
    


module.exports = userRoutes;