Template.flightSubmit.rendered = function () {
	$('#flightDate').datepicker();
};

Template.flightSubmit.events({
	'submit form': function (e, template) {
		var destination = $(e.target).find('[name=destination]').val();
		var airport = $(e.target).find('#airport').val();
		var flightNumber = $(e.target).find('#flightNumber').val();
		var flightDate = $(e.target).find('#flightDate').val();

		var flight = {
			destination: destination,
			airport: airport,
			flightNumber: flightNumber,
			flightDate: flightDate
		};

		Flights.insert(flight);

	}
});