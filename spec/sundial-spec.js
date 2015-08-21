var sundial = require("../sundial");

describe("A Sundial's", function(){

  describe("a hour hand angle method", function(){
    it("returns the degree of angle of the hour hand", function(){
      var hourAngle = sundial.hourHandAngle( 2, 20);
      expect(hourAngle).toBe(70)
    })
  })

  describe("a minute hand angle method", function(){
    it("returns the degree of angle of the minute hand", function(){
      var minuteAngle = sundial.minuteHandAngle( 6 );
      expect(minuteAngle).toBe(36)
    })
  })

  describe("hands angle method", function(){
    it("returns the degree of angle between the hands", function(){
      var handsAngle = sundial.handsAngle( 2, 20 );
      expect(handsAngle).toBe(50)
    })
  })


})
