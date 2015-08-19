var sundial = require("../sundial");

describe( "minHandAlign", function(){
  it ("should be divizable by 6", function(){
    var minHandAlign = sundial.minMove( 12 );
    expect ( minHandAlign ).toBe( 72 );
  });
});

describe( "hourHandAlign", function(){
  it ("should be right hour", function(){
    var hourHandAlign = sundial.hourMove( 2, 15 );
    expect ( hourHandAlign ).toBe( 67.5 );
  });
});

describe( "angleDifference", function(){
  it ("should be 30 degrees difference between hour and minute", function(){
    var handsAngleDifference = sundial.angleDiff( 1, 0 );
    expect ( handsAngleDifference ).toBe( 30 );
  });
});

//6 degrees per minute modulo?
//30 degrees per hour modulo?

// Test
// minHandPosition % 30 == 0;
//
//
// JS
// 2 / 12 * 360 = 60
