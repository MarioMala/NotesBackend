/** @format */

const Note = require('../../db/models/note.js');

class NoteActions {
	 async saveNote(req, res) {
		const title = req.body.title;
		const body = req.body.body;
		
		let note = await Note({
			title,
			body,
		});

		await note.save();
		res.status(201).json(note);
	}

	async getAllNotes(req, res) {
		try {
			const doc = await Note.find({});
			res.status(200).json(doc);
		} catch (err) {
			res.status(500, err.message);
		}
	}
	async getNote(req, res) {
		const id = req.params.id;
		const note = await Note.findOne({ _id: id });
		res.status(200).json(note);
	}
	async updateNote(req, res) {
		const id = req.params.id;
		const title = req.body.title;
		const body = req.body.body;

		const note = await Note.findOne({ _id: id });
		note.title = title;
		note.body = body;
		await note.save();
		res.status(201).json(note);
	}
	async deleteNote(req, res) {
		const id = req.params.id;
		await Note.deleteOne({ _id: id });
		res.sendStatus(204);
	}
}

module.exports = new NoteActions();
