var sundial = require("../sundial");

describe("a sundial's", function(){

  describe("bigHandAngle method", function(){
    it("should return the angle of the big hand", function(){
      var hourAngle = sundial.getHourAngle(4,20);
      expect(hourAngle).toBe(130);
    });
  });
  describe("smallHandAngle method", function(){
    it("should return the angle of the small hand", function(){
      var minuteAngle = sundial.getMinuteAngle(20);
      expect(minuteAngle).toBe(120);
    });
  });
  describe("handsAngle method", function(){
    it("should return the angle between the clock hands at 12:20", function(){
      var handsAngle = sundial.getAngleBetweenHands(12, 20);
      expect(handsAngle).toBe(110);
    });
    it("should return the angle between the clock hands at 3:42", function(){
      var handsAngle = sundial.getAngleBetweenHands(3, 42);
      expect(handsAngle).toBe(141);
    });
  });
})
