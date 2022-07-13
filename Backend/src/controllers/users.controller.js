const useCtrl = {};
const User = require('../models/User');

useCtrl.getUsers = async (req, res) => {
	// consulta
	const users = await User.find();
	res.json(users);
};

useCtrl.createUsers = async (req, res) => {
	const { username } = req.body;
	const newUser = new User({ username });
	await newUser.save();
	res.json({ message: 'User saved' });
};

useCtrl.deleteUser = async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id);
	res.json({ message: `User deleted: ${req.params.id}` });
};

module.exports = useCtrl;
