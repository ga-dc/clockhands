var clock = require("../clock")

describe("a clock", function(){

  describe("should be a 45 degree andgle at 3 o' clock", function(){
    var hourAngle = clock.hour(3);
    var minuteAngle = clock.minute(00);
    expect(angle).toBe(45);
  });

  describe("should be a 180 degree andgle at 6 o' clock", function(){
    var angle = clock.time(6);
    var minuteAngle = clock.minute(00)
    expect(angle).toBe(180);
  });

  describe("should be a 0 degree andgle at 12 o' clock", function(){
    var angle = clock.time(6);
    var minuteAngle = clock.minute(00)
    expect(angle).toBe(0);
  });

})
