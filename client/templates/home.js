
if (Meteor.isClient) {

	Template.home.events({
		"click .btn": function() {
			if (Meteor.user() != null) {
				Router.go('flightsList');
			}
			else
				Router.go('/sign-in');
		}
})
}