//sundial-spec.js

var sundial = require("../sundial")

describe("hours <= 12 && minutes <= 59", function() {
    it("should be a number less than 13", function() {
        var hour = sundial.hourMinHands(12)
        expect(hour).toBeLessThan(13)
    })
    it("should be a number less than 60", function() {
        var minute = sundial.hourMinHands(59)
        expect(minute).toBeLessThan(60)
    })

    it("should be 0 for 12 noon", function() {
        var degree = sundial.hands(12, 0);
        expect(degree).toBe(0);
    })

    it("should be 180 for 6", function() {
        var degree = sundial.hands(6, 0);
        expect(degree).toBe(180);
    })

    it("should be at 90 at 2:30", function() {
        var degree = sundial.hands(2, 30);
        expect(degree).toBe(105);
    })

})
