function PostItBackend ( connection ) {
	this._connection = connection;
}

PostItBackend.prototype.list = function (callback) {
	this._connection.query('select * from post_it', callback);
}

PostItBackend.prototype.add = function (postIt, callback) {
	this._connection.query('insert into post_it set ?', postIt, callback);
}
	
module.exports = function () {
	return PostItBackend;
}