sundial = {
	hours: function(hour, minute) { return (hour * 60 + minute) / 2; },
	minutes: function(minute) { return minute * 6; },
	difference: function(hour, minute) {
		var diff = Math.abs(this.minutes(minute) - this.hours(hour, minute))
		return Math.min(diff, 360 - diff)
	}
}

module.exports = sundial;
