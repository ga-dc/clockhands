//Clock function that, given the time in hrs and mins, returns angle b/t hands on a clock
//Return smaller angle (<180 degrees)


var clock = require("../clock")

//time in this example is 2:30

// 360 degrees / 12 hours = 30 degrees/hour
describe ("hour angle", function(){
  it( "returns angle associated with given hour", function(){
    var hourAngle = clock.hour( 2 )
    // 2 * 30 degrees/hour = 60
    expect( hourAngle ).toBe( 60 );
  })
});

// 360 degrees / 60 minutes = 6 degrees/minute
describe ("minute angle", function(){
  it( "returns angle associated with given minutes", function(){
    var minuteAngle = clock.minute( 30 )
    // 30 * 6 degress/minute = 180
    expect( minuteAngle ).toBe( 180 );
  })
})
