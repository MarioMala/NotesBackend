/** @format */
const express = require('express');
const app = express();
const { port } = require('./config.js');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// routing
app.use('/api/', apiRouter);

//db
require('./db/mongoose.js');

//parsery
app.use(bodyParser.json());

app.listen(port, function () {
	console.log('Serwer słucha!');
});
