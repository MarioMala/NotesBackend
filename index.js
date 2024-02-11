/** @format */
require('./db/mongoose.js');
const express = require('express');
const app = express();
const { port } = require('./config.js');
const apiRouter = require('./routes/api');

// routing
app.use('/', apiRouter);

app.listen(port, function () {
	console.log('Serwer słucha!');
});
