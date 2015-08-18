var sundial = require("../sundial")

describe("hours", function() {
	it("should calculate degrees with just the hour hand at 6", function() {
		var degrees = sundial.hours(6);
		expect(degrees).toBe(180);
	})
	it("should calculate degrees with just the hour hand at 3", function() {
		var degrees = sundial.hours(3);
		expect(degrees).toBe(90);
	})
})

describe("minutes", function() {
	it("should return degrees when just the minute hand is at 30", function() {
		var degrees = sundial.minutes(30);
		expect(degrees).toBe(180);
	})
	it("should return degrees when just the minute hand is at 30", function() {
		var degrees = sundial.minutes(45);
		expect(degrees).toBe(270);
	})
})

describe("difference", function() {
	it("should return difference in degrees when the hour is 6 and the minutes are 30", function() {
		var degrees = sundial.difference(6, 30);
		expect(degrees).toBe(0);
	})
	it("should return difference in degrees when the hour is 9 and the minutes are 0", function() {
		var degrees = sundial.difference(9, 0);
		expect(degrees).toBe(90);
	})
	it("should return difference in degrees when the hour is 1 and the minutes are 0", function() {
		var degrees = sundial.difference(1, 0);
		expect(degrees).toBe(30);
	})
})
