const express = require('express');
const router = express.Router();
const {
	getUsers,
	deleteUser,
	createUsers,
} = require('../controllers/users.controller');

router.route('/').get(getUsers).post(createUsers);

router
	.route('/:id')

	.delete(deleteUser);

module.exports = router;
