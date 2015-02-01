Router.configure({
	layoutTemplate: 'appLayout'
});


Router.route('/', function() {
	this.render('home');
});

Router.route('/intro', function() {
	this.render('introduction');
});

Router.route('/primaryInfo', function() {
	this.render('primaryUserInfo');
});

Router.route('/flightSubmit', {
	name: "flightSubmit"
});

Router.route('/flightsList',{
	name: "flightsList",
	template: "flightsList"
});