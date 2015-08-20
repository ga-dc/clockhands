var sundial = require("../sundial")

describe ("working sundial", function(){

  describe("noon 15", function(){
    it("should return 90 degrees", function(){
      var angle = sundial.time( 12, 15 )
      expect( angle ).toBe( 90 );
    })
  })

  describe("noon 45", function(){
    it("should return 90 degrees", function(){
      var angle = sundial.time( 12, 45 )
      expect( angle ).toBe( 90 );
    })
  })

  describe("noon 30", function(){
    it("should return 180 degrees", function(){
      var angle = sundial.time( 12, 30 )
      expect( angle ).toBe( 180 );
    })
  })

  describe("noon", function(){
    it("should return 0 degrees", function(){
      var angle = sundial.time( 12, 00 )
      expect( angle ).toBe( 0 );
    })
  })

})
