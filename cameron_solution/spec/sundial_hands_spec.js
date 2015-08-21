var sundial_hands = require( "../src/sundial_hands")

describe("a sundial", function(){

// Pseudo Code

//Write function that takes an hour as input and returns angle from 0

  describe( "hour angle method", function(){
    it( "should take the hour input between 0 and 11 and return 360 divided by that number", function(){
      var hourAngle = sundial_hands.findHourAngle( 6 );
      expect( hourAngle ).toBe( 180 );
    })
  })

//Write function that takes a minute from 1 to 60 and returns that fraction of 360

  describe( "minute angle method", function(){
    it( "should take the miute input between 0 and 59 and return 360 times that number divided by 60", function(){
      var minuteAngle = sundial_hands.findMinuteAngle( 6 );
      expect( minuteAngle ).toBe( 18 );
    })
  })

//write function that takes difference between the angless

  describe( "difference between minute and hour hand angle", function(){
      it( "should take the hour and minut functions return values and calculate the diference", function(){
        var angleDifference = sundial_hands.findAngleDiffernce( 50, 20 );
        expect( angleDiffence ).toBe( 30 );
      })
  }

});
