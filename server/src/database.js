const Mongoose = require('mongoose')

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/databasetest'

Mongoose.connect(URI, {
    useNewUrlParser: true, 
})

const connection = Mongoose.connection;

connection.once('open', () => {
    console.log('Bd Connected');
})