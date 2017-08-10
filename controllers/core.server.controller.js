'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};


exports.signup = function(req, res) {
	res.render('./../public/views/user/signup.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.map = function(req, res) {
	res.render('./../public/views/map.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.game = function(req, res) {
	res.render('./../public/views/game.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.contact = function(req, res) {
	res.render('./../contact.ejs', {
		user: req.user || null,
		request: req
	});
};



exports.add_product = function(req, res) {
	res.render('./../public/views/product/add_product.ejs', {
		user: req.user || null,
		request: req
	});
};



exports.view_list = function(req, res) {
	res.render('./../public/views/product/view_list.ejs', {
		user: req.user || null,
		request: req
	});
};





exports.list = function(req, res) {
	res.render('./../public/views/article/list.ejs', {
		user: req.user || null,
		request: req
	});
};


exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};
