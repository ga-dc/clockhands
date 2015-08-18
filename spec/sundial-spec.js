var sundial = require('../sundial');

describe( "return the angle", function(){
  it( "should return 0 at 12:00", function () {
    var angle = sundial.calculate( 12, 0);
    expect( angle ).toBe( 0 );
  })

  it( "should return 90 at 3:00 ", function () {
    var angle = sundial.calculate( 3, 0);
    expect( angle ).toBe( 90 );
  })

  it( "should return 180 at 6:00", function () {
    var angle = sundial.calculate( 6, 0);
    expect( angle ).toBe( 180 );
  })

  it( "should return 90 at 9:00", function () {
    var angle = sundial.calculate( 9, 0);
    expect( angle ).toBe( 90 );
  })


});
