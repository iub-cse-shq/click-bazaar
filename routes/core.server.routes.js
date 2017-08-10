'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/about').get(core.about);
	app.route('/map').get(core.map);
	app.route('/game').get(core.game);
	app.route('/contact').get(core.contact);
	// app.route('/add_product').get(core.add_product);
	// app.route('/view_list').get(core.view_list);
	app.route('/signup').get(core.signup);

	

	
};
