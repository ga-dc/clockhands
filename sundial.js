module.exports = {

	get_hour: function(h, m) {

		hours = 360/12;
		minutes = 360/60;
		next_hours = hours * h;
		next_minutes = minutes * m;
		h_m_degrees_H = next_hours - next_minutes;
		h_m_degrees_M = next_minutes - next_hours;
		console.log("hours: " + hours);
		console.log("minutes: " + minutes);
		console.log("next_hours: " + next_hours);
		console.log("next_minutes: " + next_minutes);
		console.log("h_m_degrees_H: " + h_m_degrees_H);
		console.log("h_m_degrees_M: " + h_m_degrees_M);

		if (h_m_degrees_H > h_m_degrees_M) {
			return Math.abs(h_m_degrees_H)
		} else {
			return Math.abs(h_m_degrees_M)
		}
	}

}
