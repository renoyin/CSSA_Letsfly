Router.route('/', function() {
	this.render('home');
	this.layout('appLayout');
	this.render('_header', {to: 'header'});
	this.render('_footer', {to: 'footer'});
});

Router.route('/intro', function() {
	this.layout('appLayout');
	this.render('introduction');
	this.render('_header', {to: 'header'});
	this.render('_footer', {to: 'footer'});
});