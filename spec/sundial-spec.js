var sundial = require("../sundial");

describe("a sundial's", function(){

  describe("hourHand", function(){
    it("should return the angle of hour hand by degree", function(){
      var hourAngle = sundial.hourHandAngle(9,0);
      expect(hourAngle).toBe(90);
    })
  })

  describe("minuteHand", function(){
    it("should return the angle of minute hand by degree", function(){
      var minuteAngle = sundial.minuteHandAngle(10);
      expect(minuteAngle).toBe(60);
    })
  })

  describe("angleBetweenHands", function(){
    it("should return the smaller angle between hourHand and minuteHand", function(){
      var angle = sundial.betweenAngle(4,0);
      expect(angle).toBe(120);
    })
  })

})
