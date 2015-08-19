//HOMEWORK
describe("hourHandAngle", function(){
  it("returns the degree the hour has moved", function(){
    expect(hourHandAngle(6,15)).toBe(187.5)
    //((hour * 30) + (.25 * 30))
  });
});

describe("minuteHandAngle", function(){
  it("returns the degree of the minute hand", function(){
    expect(minuteHandAngle(15)).toBe(90)
    //minute * 6 = 90 (6 is from one min = 6 degrees)
  });
});

describe("angleBetweenHands", function(){
  it("works at noon", function(){
    expect(angleBetweenHands(12,0)).toBe(0)
  });

  it("works when the hour changes", function(){
    expect(angleBetweenHands(1,0)).toBe(30)
  });

  it("works when the hour hand is ahead", function(){
    expect(angleBetweenHands(4,15).toBe(37.5))
  });

  it("gives the smaller angle", function(){
    expect(angleBetweenHands(10,20)).toBe(170)
    // (10*30)=300.  (20/60 * 30)=9.99.  =189.99 - 120. 360-189.99 =170
  });

})
