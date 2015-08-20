var sundial = require("../sundial.js");

describe ( "a sundial's", function () {

  var time;
  var hourHandAngle;
  var minuteHandAngle;
  var angle;

  beforeEach( function () {
    time = { hours: 1, minutes: 40 };
    hourHandAngle = sundial.findHourHandAngle( time.hours );
    minuteHandAngle = sundial.findMinuteHandAngle( time.minutes );
    angle = sundial.findAngle( hourHandAngle, minuteHandAngle );
  });

  describe( "findHourHandAngle method", function () {
    it( "should return the angle of the hour hand relative to 12 o' clock at a given time", function () {
      expect (hourHandAngle).toBe( 30 );
    });
  });

  describe( "findMinuteHandAngle method", function () {
    it ( "should return the angle of the minute hand relative to 12 o' clock at a given time", function () {
      expect (minuteHandAngle).toBe ( 240 );
    });
  });

  describe( "findAngle method", function () {
    it("should be positive", function() {
      expect (angle).toBeGreaterThan( 0 );
    });
    it("should be 180 degrees or smaller", function() {
      expect (angle).not.toBeGreaterThan( 180 );
    });
    it ( "should return the angle between the hour and minute hands at a given time", function () {
      expect ( angle ).toBe( 150 );
    });
  });

});
