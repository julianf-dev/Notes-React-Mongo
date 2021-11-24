const express = require('express');
const router = express.Router();
const { getUsers, getUser, deleteUser, createUsers } = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')

    .get(getUser)
    .delete(deleteUser)


module.exports = router;
