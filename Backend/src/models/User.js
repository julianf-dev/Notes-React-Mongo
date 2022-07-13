// creamos nuestro modelo de la base de datos
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			// validar que no tenga espacios
			trim: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

// con esto mongo crea un modelo llamado users

module.exports = model('User', userSchema);
