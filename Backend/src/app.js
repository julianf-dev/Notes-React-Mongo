const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 3030);

// middlewares
app.use(cors()); // con esto cada que llegue una peticion al server la va a mostrar
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;
