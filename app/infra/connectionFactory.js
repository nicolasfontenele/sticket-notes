var mysql = require('mysql');

var createDBConnection = function() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'stickernotes'
	});
}
// wrapper for creating connection
module.exports = function () {
	return createDBConnection;
}