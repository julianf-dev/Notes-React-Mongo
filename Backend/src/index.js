require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
	app.listen(app.get('port'));
	console.log(
		`Servidor corriendo en puerto: http://localhost:${app.get('port')}`
	);
}

main();
