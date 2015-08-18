var sundial = require( "../sundial" )

describe( "hours", function(){
  it( "should calculate degrees with just the hour hand at 6", function(){
    var degrees = sundial.hours(6);
    expect(degrees).toBe(180);
  })
  it( "should calculate degrees with just the hour hand at 3", function(){
    var degrees = sundial.hours(3);
    expect(degrees).toBe(90);
  })
})

describe( "minutes", function(){
  it( "should return degrees when just the minute hand is at 30", function(){
    var degrees = sundial.minutes(30);
    expect( degrees ).toBe(180);
  })
  it( "should return degrees when just the minute hand is at 30", function(){
    var degrees = sundial.minutes(45);
    expect( degrees ).toBe(270);
  })
})