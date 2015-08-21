var sundial = require("../sundial");

describe( "a sundial's", function() {

  describe( "hour hand", function() {
    it( "should return angle of the hour hand", function() {
      var hAngle = sundial.getAngleHourHand( 5, 24 );
      expect( hAngle ).toBe( 162 );
    })
  })

  describe( "minute hand", function() {
    it( "should return angle of the minute hand", function() {
      var mAngle = sundial.getAngleMinuteHand( 24 );
      expect( mAngle ).toBe( 144 );
    })
  })

  describe( "clock angle", function() {
    it( "should return the angle between hands", function() {
      var delta = sundial.getAngleBetweenHands( 5, 24 );
      expect( delta ).toBe( 18 );
    })
  })

  describe( "clock angle", function() {
    it( "should return the angle between hands", function() {
      var delta = sundial.getAngleBetweenHands( 0, 0 );
      expect( delta ).toBe( 0 );
    })
  })

})
