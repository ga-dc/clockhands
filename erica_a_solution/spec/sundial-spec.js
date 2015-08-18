var sundial = require("../sundial")

describe( "hourHand" , function(){ // Function to determine what angle the hour hand is
  it( "the time 1:00 should be angle 30 degrees", function(){ // 1 o'clock is 30 degrees, 3 o'clock is 90 degrees is, 6 o'clock is 180 degrees etc.
    var time = sundial.hourHand( 1, 0 ); // Set hour and minute arguments, 1 o'clock would be 1 hour and 0 minutes
    expect( time ).toBe(30) // Function should multiply hour by 60, add minutes and divide the total by two so 1 o'clock would be 60/2 = 30
  });
})

describe("minuteHand", function(){ // Function to determine what angle the minute hand is
  it("the time 10 minutes should be angle 60 degrees", function(){  // 10 minutes is 60 degrees, 30 minutes is 180 degrees is, 120 minutes is 360 degrees etc.
    var time = sundial.minuteHand( 10 ); // Set minutes argument, 10 minutes
    expect( time ).toBe(60) // Function should multiply minutes by 6 so 10 minutes would be 60
  });
});
