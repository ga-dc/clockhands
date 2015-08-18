//sundial-spec.js

var sundial = require("../sundial")

describe("hours <= 12 && minutes <= 59", function(){
    it("should be a number less than 13", function(){
        var hour = sundial.hourMinHands(12)
        expect(hour).toBeLessThan(13)
    })
    it("should be a number less than 60", function(){
        var minute = sundial.hourMinHands(59)
        expect(minute).toBeLessThan(60)
    })
})
