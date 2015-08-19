var sundial = require("../sundial")

describe("get hour value", function(){
   it("should be an integer between 1 and 12", function(){
       var hour = sundial.hour("2:30");
       expect( hour ).toBe( 2 );
   });
})

describe("get hour value", function(){
   it("should be an integer between 1 and 24", function(){
       var hour = sundial.hour("14:30");
       expect( hour ).toBe( 2 );
   });
})


describe("get minute value", function(){
   it("should be an integer between 00 and 59", function(){
       var minutes = sundial.minute("12:31");
       expect( minutes ).toBe( 31 );
   });
})

describe("get minute angle", function(){
   it("should be an integer between 0 and 360", function(){
       var angle = sundial.minuteAngle("12:15");
       expect( angle ).toBe( 90 );
   });
})

describe("compare angles", function(){
   it("should be an integer between 0 and 180", function(){
       var angle = sundial.compareAngle("12:15");
       expect( angle ).toBe( 90 );
   });
})

describe("compare angles", function(){
   it("should be an integer between 0 and 180", function(){
       var angle = sundial.compareAngle("1:30");
       expect( angle ).toBe( 150 );
   });
})
