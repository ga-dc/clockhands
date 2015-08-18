var sundial = require("../sundial");

describe ("time input", function(){
  it ("should get a input from the user", function(){
    var time = sundial.get_time( "12:59" );
    expect(time).toBe("12:59");
  })
});

// describe ("validate time input", function(){
//   it ("should match time to valid expression", function(){
//     var validity = sundial.validate_time( "11d20");
//     expect(validity).toBe(true);
//   })
//   it ("should reject and invalid time", function(){
//     var response = sundial.validate_time("22222222:23");
//     expect(response).toBe("Please enter a valid time")
//   })
// });

describe ("hour", function(){
  it ("should parse the hour from given time", function(){
    var hour = sundial.get_hour( "12:59" );
    expect(hour).toBe(12);
  })
});

describe ( "minutes", function(){
  it ("should parse the minutes from given time", function(){
    var minutes = sundial.get_minutes( "12:59" );
    expect(minutes).toBe(59);
  })
})

describe ( "degrees", function(){
  it ("should return 30 deg per hour plus .5 deg per minute", function(){
    var hour_deg = sundial.hour_degrees("12:59");
    expect(hour_deg).toBe(389.5);
  })
  it ("should multiply the minutes by 6 degrees", function(){
    var min_deg = sundial.min_degrees("12:59");
    expect(min_deg).toBe(354);
  })
})

describe ( "difference", function(){
  it ("should subtract the minute degrees from the hour degrees", function(){
    var difference = sundial.difference( "12:59" );
    expect(difference).toBe(35.5);
  })
})

describe ( "positive difference", function(){
  it ("should make difference positive", function(){
    var difference = sundial.pos_diff("12:59");
    expect(difference).toBe(35.5);
  })
})

describe ("validate difference", function(){
  it ("should be less than 180", function(){
    var difference = sundial.valid_difference( "12:59" );
    expect(difference).toBe(35.5);
  })
})
