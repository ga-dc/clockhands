var sundial = require( "../sundial" );

describe( "hands overlapping", function(){
  it( "should return the angle between hands at 12:00", function(){
     var angle = sundial.angleDifference( 12, 0 );
     expect( angle ).toBe( 0 );
   })
});

describe( "angle difference", function(){
  it( "should return the angle between hands at 12:05", function(){
     var angle = sundial.angleDifference( 12, 5 );
     expect( angle ).toBe( 27.5 );
   })
});

describe( "distance greater 180", function(){
  it( "should return the angle between hands at 1:45", function(){
     var angle = sundial.angleDifference( 1, 45 );
     expect( angle ).toBe( 142.5 );
   })
});
