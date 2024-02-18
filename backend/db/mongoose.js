/** @format */

const mongoose = require('mongoose');
const { database } = require('../config.js');

//Połączenie z bazą danych
mongoose.connect(database, {});
