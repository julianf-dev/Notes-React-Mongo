const notesCtrl = {};
const Note = require('../models/Note.js');

notesCtrl.getNotes = async (req, res) => {
	// consulta
	const notes = await Note.find();
	res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
	const { title, content, date, author } = req.body;
	const newNote = new Note({
		title,
		content,
		date,
		author,
	});
	await newNote.save();
	res.json({ message: 'Note saved' });
};

notesCtrl.getNote = async (req, res) => {
	const note = await Note.findById(req.params.id);
	res.json(note);
};

notesCtrl.deleteNote = async (req, res) => {
	const note = await Note.findByIdAndDelete(req.params.id);
	res.json({ message: 'Note deleted' });
};

notesCtrl.updateNote = async (req, res) => {
	const { title, content, author, date } = req.body;

	const note_update = await Note.findByIdAndUpdate(req.params.id, {
		title,
		content,
		author,
		date,
	});
	res.json({ message: 'Note updated' });
};

module.exports = notesCtrl;
