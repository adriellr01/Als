// grab dependencies
const express = require('express'),
	mainController = require('./controllers/main.controller'),
	userController = require('./controllers/user.controller'),
	router = express.Router();

// define routes
router.route('/').get(mainController.showHome);
router.route('/users').get(userController.getUsers);
router.route('/users/seed').get(userController.seedUsers);
 
//router.route('/contacts', contactController.getContacts);


// export router
module.exports = router;
