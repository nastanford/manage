var express = require('express');
var router = express.Router();

/* Route - /  (ROOT) */
router.get('/', function(req, res) {
	res.render('main/index', {
		pageTitle: 'Home',
		pageID: 'home'
	});
});

/* Route - /  home */
router.get('/home', function(req, res) {
	res.render('main/index', {
		pageTitle: 'Home',
		pageID: 'home'
	});
});

/* Route - /  orginal home */
router.get('/ohome', function(req, res) {
	res.render('home', {
		pageTitle: 'Original Home',
		pageID: 'ohome'
	});
});

/* Route - About */
router.get('/about-us', function(req, res) {
	res.render('main/about', {
		pageTitle: 'About',
		pageID: 'about'
	});
});

/* Route - Services */
router.get('/services', function(req, res) {
	res.render('main/services', {
		pageTitle: 'Services',
		pageID: 'services'
	});
});

/* Route - Portfolio */
router.get('/portfolio', function(req, res) {
	res.render('main/portfolio', {
		pageTitle: 'Portfolio',
		pageID: 'portfolio'
	});
});

/* Route - Blog */
router.get('/blog', function(req, res) {
	res.render('main/blog', {
		pageTitle: 'Blog',
		pageID: 'blog'
	});
});

/* Route - Contact */
router.get('/contact', function(req, res) {
	res.render('main/contact', {
		pageTitle: 'Contact',
		pageID: 'contact'
	});
});

/* Route - FAQ */
router.get('/faq', function(req, res) {
	res.render('main/faq', {
		pageTitle: 'FAQ',
		pageID: 'faq'
	});
});

module.exports = router;
