sundial = {
	hours: function(hour) {
		if (hour > 12) {
			return "AM and PM, baby, use them.";
		} else {
			return hour * 30;
		}
	},
	minutes: function(minute) {
		if (minute > 60) {
			return "Can't be greater than 60 minutes!"
		} else {
			return minute * 6;
		}
	},
	difference: function(hour, minute) {
		var difference = Math.abs(this.minutes(minute) - this.hours(hour))
		return Math.min(difference, 360 - difference)
	}
}

module.exports = sundial;
