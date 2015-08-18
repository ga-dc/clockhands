sundial = {
	hours: function(hour) {
		if (hour > 12) {
			return "AM and PM, baby, use them.";
		} else if (hour == 12) {
			return 0;
		} else {
			return hour * 30;
		}
	},
	minutes: function(minute) {
		if (minute > 60) {
			return "Can't be greater than 60 minutes!"
		} else if (minute == 60) {
			return 0;
		} else {
			return minute * 6;
		}
	},
	difference: function(hour, minute) {
		var difference = Math.abs(this.minutes(minute) - this.hours(hour))
		if (difference > 180) {
			return 360 - difference
		} else {
			return difference
		}
	}
}

module.exports = sundial;
