var sundial = require("../sundial");

describe("time", function() {
  it("returns the time", function() {
    var time = sundial.time(4, 30);
    expect(time).toBe("4:30");
  })
})
describe("minute_angle", function() {
  it("returns the minute angle", function() {
    var angle = sundial.minute_angle(45);
    expect(angle).toBe(270);
  })
})
describe("hour_angle", function() {
  it("returns the hour angle", function() {
    var angle = sundial.hour_angle(9);
    expect(angle).toBe(270);
  })
})
describe("angle_between_hands", function() {
  it("returns the angle between the hands of the clock", function() {
    var result = sundial.angle_between_hands(4, 30);
    expect(result).toBe(45);
  })
  it("handles the 12th hour", function() {
    var result = sundial.angle_between_hands(12, 20);
    expect(result).toBe(110);
  })
  it("returns a number less than 180 degrees", function() {
    var result = sundial.angle_between_hands(1, 59);
    expect(result).toBe(65.5);
  })
})
