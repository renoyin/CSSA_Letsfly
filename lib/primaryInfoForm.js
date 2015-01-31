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

	    // Prevent default form submit
	    return false;
	}
	});
  
  
}