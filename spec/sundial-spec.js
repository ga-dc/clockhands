var sundial = require ("../sundial");

describe("minuteHandAngle", function(){
  it ("Minute hand should be at noon",function(){
    var minuteHandAngle = sundial.minuteHandAngle(30);
    expect( minuteHandAngle).toBe(180);
  });
});

describe("hourHandAngle", function(){
  it ("Hour hand at 6", function(){
    var hourHandAngle = sundial.hourHandAngle(6);
    expect (hourHandAngle).toBe(180);
  });
});

describe("hourHandMoves", function(){
  it ("Hour hand on at 6:30", function(){
    var hourHandMoves = sundial.hourHandMoves(6, 30);
    expect(hourHandMoves).toBe(195);
  });
});
