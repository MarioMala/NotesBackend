/** @format */

const express = require('express');
const router = express.Router();

const { getAllNotes, getNote, saveNote, updateNote, deleteNote } = require('../actions/api/noteActions.js');

router.get('/notes', getAllNotes);
router.get('/notes/:id', getNote);
router.post('/notes/', saveNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
