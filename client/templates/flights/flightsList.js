Template.flightsList.helpers({
	flights: function () {
		return Flights.find();
	}
});