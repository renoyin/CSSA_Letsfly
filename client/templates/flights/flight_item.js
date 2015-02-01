Template.flightItem.helpers({
	destinationInChinese: function () {
		if (this.destination === "china")
			return "中国";
		else
			return "美国";

	}
});