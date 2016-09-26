const mongoose = require('mongoose'),
 	Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
	userName: { type: String, required: true },
	password: { type: String, required: true },
	email: String,
});

// create the model
const userModel = mongoose.model('User', userSchema);

// export de model
module.exports = userModel;	
