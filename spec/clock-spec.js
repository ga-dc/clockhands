var clock = require("../clock");

describe("minuteHand", function(){
  it("returns the degrees the minute has moved", function(){
      var result= clock.minutehand(30);
      expect(result).toBe(180);
  })
});

describe("hourHand", function(){
  it("returns the degrees the minute has moved", function(){
      var result= clock.hourhand(4,30);
      expect(result).toBe(135);
  })
});
