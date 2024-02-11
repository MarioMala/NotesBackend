/** @format */

const express = require('express');
const router = express.Router();

const { saveNote } = require('../actions/api/notes.js');

router.get('/', saveNote);

module.exports = router;
