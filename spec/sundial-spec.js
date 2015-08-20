var clockHands = require("../sundial")

describe("a sundial", function(){

  describe("get hourAngle", function(){
    it("should get the angle between the clock hands", function(){
      var angle = clockHands.hourAngle( 3 );
      expect( angle ).toBe( 90 );
    })
  })

  describe("get minuteAngle", function(){
    it("should get the angle between the clock hands", function(){
      var angle = clockHands.minuteAngle( 30 );
      expect( angle ).toBe( 180 );
    })
  })

  describe("angleBewteen", function(){
    it("should get the angle between the clock hands", function(){
      var angles = clockHands.sundial( 90 , 180 );
      expect( angles ).toBe( 90 );
    })
  })






})
