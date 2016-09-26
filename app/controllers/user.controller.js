const User = require('../models/user');

module.exports = {
	getUsers: getUsers,
	seedUsers: seedUsers
};


function getUsers(req, res) {
	res.send('getusers not implemented');
};

function seedUsers(req, res) {
	const users = [
		{ userName: "adriellr01", password: "@liennis85", email: "adriellr01@gmail.com" },
		{ userName: "adriboy", password: "adriboy" },
		{ userName: "yaya", password: "yaidana" }
	];

	User.remove({}, () => {
		for (user of users) {
			var newUser = new User(user);
			newUser.save();
		}
	});

	res.send('Users seeded on Abs database');
};