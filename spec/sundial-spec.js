var sundial = require("../sundial")

describe ("get a time", function(){
  it("should get a time", function(){
    var time = sundial.get_time("1:00")
    expect(time).toBe("1:00")
  });
});

  describe ("The angle at 3:00", function(){
    it("should find an angle", function(){
      var angle = sundial.angle(90)
      expect(time).toBe(90)
    });
});

describe ("The angle at 12:00", function(){
  it("should find an angle", function(){
    var angle = sundial.angle(0)
    expect(time).toBe(0)
  });
});
