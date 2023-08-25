//const { Router } = require("express")
const express = require('express')
const instructorController = require('../controllers/instructor-controller')
//const authMiddleware = require('../middleware/authMiddleware')
const protectedRoutes = require("../middleware/protected")

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Instructor Route');
});

//create new register
router.post('/register', instructorController.create);

//login user
router.post('/login', instructorController.login);

//login user
router.post('/logout', instructorController.logout);

// Export the function that mounts the router
module.exports = function instructorRouter(app) {
    app.use('/instructorApi', router);
    app.use(protectedRoutes)
};




