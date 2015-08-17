var sundial = require( "../sundial" )

describe( "minuteHand", function(){
  it("returns the position of minute hand by degrees in relation to clock", function(){
    var minute = sundial.minuteAngle(2)
    expect(minute).toBe(12)
  });
});

describe("hourHand", function(){
  it("returns the position of hour hand by degrees in relation to clock", function(){
    var hour = sundial.hourAngle(3,0)
    expect(hour).toBe(90)
  });
});

describe("angleBetweenHands", function(){
  it ("returns the smaller angle between the two hands", function(){
    var angle = sundial.angleBetween(12,0)
    expect(angle).toBe(0)
  })
})
