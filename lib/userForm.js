UserInfo = new Mongo.Collection("userInfo");

if (Meteor.isClient) {
  
  Template.primaryUserInfo.events({
	"click button": function () {
	  
		var firstName = document.getElementById("firstName").value;
	  	var lastName = document.getElementById("lastName").value;
	  	var email = document.getElementById("email").value;
	  	var sex = getSex();

	  	function getSex() {
		  	if (document.getElementById("male").checked)
		  		return "男";
		  	else
		  		return "女";
		  }

		UserInfo.insert({
			lastName: lastName,
			firstName: firstName,
			emailAddress: email,
			sex: sex
		});

		Router.go('flightInfo');

	    // Prevent default form submit
		return false;
	}
	
	});

	Template._header.helpers({
  		firstName: function() {
  			if(Meteor.user().emails && Meteor.user().emails[0])
    			return Meteor.user().emails[0].address;
  		}
	});
  
  Template.flightInfo.events({
  	"click button": function() {

  		var leaveCity = document.getElementById("leaveCity").value;
  		var leaveFlightNumber = document.getElementById("leaveFlightNumber").value;
  		var leaveDate = document.getElementById("leaveDate").value;
  		var arriveCity = getArriveCity();
  		var arriveFlightNumber = document.getElementById("arriveFlightNumber").value;
  		var arriveDate = document.getElementById("arriveDate").value;
  		var toUCSD = getToUCSD();

  		function getArriveCity() {
		  	if (document.getElementsByName("LA").selected)
		  		return "洛杉矶";
		  	else
		  		return "圣地亚哥";
	  	}

	  	function getToUCSD() {
	  		if (document.getElementById("optionsRadios1").checked)
	  			return "亲友或学长学姐接送";
	  		else if (document.getElementById("optionsRadios2").checked)
  				return "希望寻找小伙伴租车";
  			else 
  				return "另有打算";
	  	}

  		var flight = {
  			// 关联当前账户
			leaveCity: leaveCity,
			leaveFlightNumber: leaveFlightNumber,
			leaveDate: leaveDate,
			arriveCity: arriveCity,
			arriveFlightNumber: arriveFlightNumber,
			arriveDate: arriveDate,
			toUCSD: toUCSD
		};

		Flights.insert(flight);
		Router.go('flightsList');

		return false;
  	}
  });
  
  
}