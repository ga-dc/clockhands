// Reference the file to test.
var sundial = require( "../sundial" )

// Use 5:30PM as an example.
// Hour * 15 = Hour Angle (PM) ... I think?
// Hour * 30 = Hour Angle (AM) ... I think?
// Minute * 6 = Minute Angle

// Add minute function.
describe("What is the minute angle?", function(){
  it("Returns the minute angle", function(){
    var minute = sundial.minute(30);
    expect(minute).toBe(180);
  });
});

// Add hour function.
describe("What is the hour angle?", function(){
  it("Return the hour angle.", function(){
    var hour = sundial.hour(5); //5:00PM
    expect(hour).toBe(75);
  });
});

