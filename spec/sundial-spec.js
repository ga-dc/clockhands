var sundial = require( "../sundial" );

describe ( " the angle between the hands of a working sundial at ", function(){

  describe("noon", function(){
    it("should be 0 degrees", function(){
      var angle = sundial.angle(12, 0);
      expect( angle ).toBe(0);
    })
  })

  describe("six o'clock", function(){
    it("should be 180 degrees", function(){
      var angle = sundial.angle(6, 0);
      expect(angle).toBe(180);
    })
  })

  describe("one-thirty", function(){
    it("should be 135 degrees", function(){
      var angle = sundial.angle(1, 30);
      expect( angle ).toBe(135);
    })
  })

  describe("four o'clock", function(){
    it("should be 120 degrees", function(){
      var angle = sundial.angle(4, 0);
      expect( angle ).toBe(120);
    })
  })



})
