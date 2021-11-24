//creamos nuestro modelo de la base de datos
const {Schema, model} = require('mongoose')

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
    },
    {
        timestamps:  true
    })

//con esto mongo crea un modelo llamado notes
module.exports = model('Note', noteSchema)