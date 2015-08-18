sundial = {
	hours: function(hour) { return hour * 30; },
	minutes: function(minute) { return minute * 6; },
	difference: function(hour, minute) {
		var diff = Math.abs(this.minutes(minute) - this.hours(hour))
		return Math.min(diff, 360 - diff)
	}
}

module.exports = sundial;
