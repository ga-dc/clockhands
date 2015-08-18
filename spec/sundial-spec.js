// Reference the file to test.
var sundial = require( "../sundial" )

// Hour * 30 = Hour Angle ... I think?
// Minute * 6 = Minute Angle

// Add minute function.
describe("handMinute", function(){
  it("Returns the minute angle.", function(){
    var minute = sundial.minute(2);
    expect(minute).toBe(12);
  });
});

// Add hour function.
describe("handHour", function(){
  it("Return the hour angle.", function(){
    var hour = sundial.hour(3, 0);
    expect(hour).toBe(90);
  });
});

describe("angleBetweenHands", function(){
  it ("Returns the smaller angle between the two hands.", function(){
    var angle = sundial.angleBetween(12, 0)
    expect(angle).toBe(0)
  });
});