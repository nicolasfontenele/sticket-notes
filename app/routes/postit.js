module.exports = function (app) {
	app.get ('/postit', function (req, res){
		
		var connection = app.infra.connectionFactory();
		var postItBackend = new app.infra.PostItBackend(connection);

		postItBackend.list(function (err, results) {
			
			res.format({
				html: function () {
					res.render('postit/postit', {list : results});	
				},
				json: function () {
					res.json(results);
				}	
			});
		});
		connection.end();
	});	

	app.get('/postit/add_note', function (req, res) {
		res.render('postit/add_note');
	});

	app.post('/postit', function (req, res) {
		
		var postit = req.body;

		var connection = app.infra.connectionFactory();
		var postItBackend = new app.infra.PostItBackend(connection);
		
		postItBackend.add(postit, function (err, results) {
			res.redirect('/postit');
		});
	});
}
