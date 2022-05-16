const express = require('express');

const router = express.Router();

const apiUsersController = require ('../../controllers/api/userController');



router.get('/users', apiUsersController.show);

router.get('/users/:id', apiUsersController.detail);



module.exports = router;