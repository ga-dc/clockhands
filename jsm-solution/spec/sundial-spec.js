var sundial = require("../sundial.js")

describe("a sundial", function(){
  describe("at an hour", function(){
    it("should return the hour's angle", function(){
      var angle = sundial.hourAngle(6);
      expect(angle).toBe(180);
    });
  });
  describe("at a minute", function(){
    it("should return the minute's angle", function(){
      var angle = sundial.minuteAngle(45);
      expect(angle).toBe(270);
    });
  });
  describe("at a time", function(){
    it("should return the angle between the hands", function(){
      var angle = sundial.angleBetween(9, 5);
      expect(angle).toBe(120)
    })
  })
});
