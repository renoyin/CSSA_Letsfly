Template.flightInfo.rendered = function () {
	$('#arriveDate').datepicker();
	$('#leaveDate').datepicker();

	$('#finishButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')		
	});
};

