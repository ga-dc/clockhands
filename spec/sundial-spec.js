var sundial = require("../sundial");

describe("a sundial", function(){

  describe("should have an hour hand", function(){
    it("should return the angle of the hour hand", function(){
      var angle = sundial.hourAngle(6);
      expect(angle).toBe(180);
    })
  })
  describe("should have a minute hand", function(){
    it("should return the angle of the minute hand", function(){
      var angle = sundial.minuteAngle(30);
      expect(angle).toBe(180);
    })
  })

})
