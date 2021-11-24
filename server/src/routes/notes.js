const express = require('express');
const router = express.Router();
const { getNotes, createNote, deleteNote, updateNote, getNote } = require('../controllers/notes.controller')

//cada que se escuche mediante la routa de notas  haga:
//del modelo de controler le vamos a pedir que importe las funciones

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')

    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;
