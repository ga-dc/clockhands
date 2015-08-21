var sundial = require("../sundial");
describe ( "a sundials angle", function(){

//return minute hand angle
  describe("minute hand method", function(){
    it ("should return minute hand angle", function(){
      var angle = sundial.minuteangle(30);
      expect(angle).toBe(180);
    });
  });

//return hour hand angle
  describe("hour hand method", function(){
    it ("should return hour hand angle", function(){
      var angle = sundial.hourangle(3, 30);
      expect(angle).toBe(105);
    });
  });

//return angle of minute (x) and hand
  describe("angle method", function(){
    it ("should return minute hour angle", function(){
      var minuteAngle = sundial.minuteangle(30);
      var hourAngle = sundial.hourangle(3, 30);
      var angle = sundial.finalangle()
      expect(angle).toBe(75)
    });
  });
})
