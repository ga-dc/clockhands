sundial = {
	hours: function(hours) {
		if (hours > 12) {
			return "AM and PM, baby, use them.";
		} else if (hours == 12) {
			return 0;
		} else {
			return hours * 30;
		}
	},
	minutes: function(minutes) {
		if (minutes > 60) {
			return "Can't be greater than 60 minutes!"
		} else if (minutes == 60) {
			return 0;
		} else {
			return minutes * 6;
		}
	}
}

module.exports = sundial;
