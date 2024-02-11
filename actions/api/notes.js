/** @format */

const Note = require('../../db/models/note.js');

module.exports = {
	saveNote: function (req, res) {
		const newNote = new Note({
			title: 'Zrobić zakupy',
			body: 'Prezerwatywy, lubrykant',
		});

		newNote.save().then(() => {
			console.log('Notatka zapisana!');
		});

		res.send('Strona głowna działa!');
	},
};
