var clock_hands = require( "../clock_hands" )

describe( "hourTimeDegrees", function(){
  it(" should give degrees for hour hand placement ", function(){
    var hourTimeDegrees = clock_hands.multiply( 2, 30);
    var hourAngle;
    expect(hourAngle).toBe( 60 )
  })
})

describe( "minuteTimeDegrees", function(){
  it(" should give degrees for minute hand placement ", function(){
    var minuteTimeDegrees = clock_hands.multiply( 15, 6);
    var minuteAngle;
    expect(minuteAngle).toBe( 90 )
  })
})















// describe("#hourHandAngle", function(){
//   it("returns the degrees the minute has moved", function(){
//       expect(hourHandAngle(4,30)).toBe(135)
//   });
// });
//
// describe("#minuteHandAngle", function(){
//   it("returns the degrees the minute has moved", function(){
//       expect(minuteHandAngle(30)).toBe(180)
//   });
// });
//
// describe("#angleBetweenHands", function(){
//   it("works at noon", function(){
//       expect(angleBetweenHands("12:00")).toBe(0)
//   });
//
//   it("works at when the hour changes", function(){
//       expect(angleBetweenHands("1:00")).toBe(30)
//   });
//
//   it("works at when the hour hand is ahead", function(){
//       expect(angleBetweenHands("6:10")).toBe(125)
//   });
//
//   it("works when the minute hand is ahead", function(){
//       expect(angleBetweenHands("2:30")).toBe(105)
//   });
//
//   it("gives the smaller, positive angle (<180 degrees)", function(){
//       expect(angleBetweenHands("10:20")).toBe(170)
//   });
// });
