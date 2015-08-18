var clock = require( "../clock" )


describe( "angle amount", function(){
  it ("should have both hands should be at 0 degrees at 12:00", function(){
    var degree = clock.angle(12,0);
    expect (degree).toBe(0);
  })

  it ("should be at 90 degrees at 3:00", function(){
    var degree = clock.angle(3,0);
    expect (degree).toBe(90);
  })

    it ("should be at 180 at 6:00", function(){
      var degree = clock.angle(6,0);
      expect (degree).toBe(180);
    })

      it ("should be at 90 at 9:00", function(){
        var degree = clock.angle(9,0);
        expect (degree).toBe(90);
      })

      it ("should be at 60 at 10:00", function(){
        var degree = clock.angle(10,0);
        expect (degree).toBe(60);
      })

      it ("should be at 82.5 at 12:15", function(){
        var degree = clock.angle(12,15);
        expect (degree).toBe(82.5);
      })
      it ("should be at 10 at 4:20", function(){
        var degree = clock.angle(4,20);
        expect (degree).toBe(10);
      })
})
