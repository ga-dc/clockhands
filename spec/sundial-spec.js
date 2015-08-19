var sundial = require("../sundial");

describe("get_hour", function() {
	it("should return degrees between hands", function() {

		var h = 3;
		var m = 36;
		var degrees = 126;

		var h_m_degrees = calculator.get_hour(h, m);
		expect(h_m_degrees).toBe(degrees);
	});

	it("should return positive number", function() {

		var h = 3;
		var m = 36;
		var degrees = 126;

		var h_m_degrees = calculator.get_hour(h, m);
		expect(h_m_degrees).toBeGreaterThan(0);
	});

	it("should return less than 180", function() {

		var h = 3;
		var m = 36;
		var degrees = 126;

		var h_m_degrees = calculator.get_hour(h, m);
		expect(h_m_degrees).toBeLessThan(180);
	});

});
