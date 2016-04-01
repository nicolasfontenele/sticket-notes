function UserBackend ( connection ) {
	this._connection = connection;
}

UserBackend.prototype.list = function (callback) {
	this._connection.query('select * from user', callback);
}

UserBackend.prototype.add = function (user, callback) {
	this._connection.query('insert into user set ?', user, callback);
}

UserBackend.prototype.find = function (user, callback) {
	this._connection.query('select * user where name = ?', user.username, callback);
}
	
module.exports = function () {
	return UserBackend;
}