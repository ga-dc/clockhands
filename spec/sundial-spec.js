var sundial = require("../sundial")

describe("A sundial's", function() {
  describe("minute hand method", function() {
    it("should return the angle of the minute hand", function() {
      var angle = sundial.minuteAngle(30)
      expect(angle).toBe(180)
    })
  })
  describe("hour hand method", function() {
    it("should return the angle of the hour hand", function(){
      var angle = sundial.hourAngle(3, 30)
      expect(angle).toBe(105)
    })
  })
  describe("angle difference method", function() {
    it("should return the angle between the hour and minute hands", function() {
      var minuteAngle = sundial.minuteAngle(30)
      var hourAngle = sundial.hourAngle(3, 30)
      var angle = sundial.finalAngle(minuteAngle, hourAngle)
      expect(angle).toBe(75)
    })
  }),
  describe("angle method", function() {
    it("should return the angle between the hour and minute hands", function() {
      var angle = sundial.angle(6, 45)
      expect(angle).toBe(67.5)
    })
  })
})
