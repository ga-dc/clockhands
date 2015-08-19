var angle require ("../sundial.js")
describe( "angleMinute", function(){
  it( "should return degree of the minute hand", function(){
    var minus = angle.angleMinute(5);
    expect(minus ).toBe( 30 );
 })
});
