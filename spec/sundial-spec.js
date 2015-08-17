var sundial = require("../sundial")

describe("get hour value", function(){
    it("should be an integer between 1 and 12", function(){
        var hour = sundial.hour("2:30");
        expect( hour ).toBe( 2 );
    });
})

describe("get minute value", function(){
    it("should be an integer between 00 and 59", function(){
        var minutes = sundial.minute("12:31");
        expect( minutes ).toBe( 31 );
    });
})
