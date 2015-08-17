var sundial = require("../sundial");

describe("sundial", function(){
  it("should find that the hour and minute hands are at same place at noon", function(){
    var noon = sundial.sundial(12, 0);
    expect(noon).toBe(0);
  })
  it("should find that at 12:30 they are 165 degrees apart", function(){
    var twelvethirty = sundial.sundial(12, 30);
    expect(twelvethirty).toBe(165);
  })
  it("should find that at 6:00 they are 180 degrees apart", function(){
    var sixoclock = sundial.sundial(6, 0);
    expect(sixoclock).toBe(180);
  })
  it("should find that at 5:24 they are 18 degrees apart", function(){
    var fivetwentyfour = sundial.sundial(5, 24);
    expect(fivetwentyfour).toBe(18);
  })
  it("should find that at 1:10 they are 25 degrees apart", function(){
    var oneten = sundial.sundial(1, 10);
    expect(oneten).toBe(25);
  })
  it("should find that at 9:05 they are 117.5 degrees apart", function(){
    var nineohfive = sundial.sundial(9, 5);
    expect(nineohfive).toBe(117.5);
  })
})
