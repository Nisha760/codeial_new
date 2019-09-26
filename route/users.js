const express = require('express');
const route = express.Router();


const usersController = require('../controllers/users_controller');

route.get('/profile', usersController.profile);
route.get('/editprofile', usersController.editProfile);

module.exports = route;