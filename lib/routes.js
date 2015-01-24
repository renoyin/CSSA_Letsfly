Router.route('/', function() {
	this.render('home');
});

Router.route('/intro', function() {
	this.layout('appLayout');
	this.render('introduction');
	this.render('_header', {to: 'header'});
	this.render('_footer', {to: 'footer'});
});