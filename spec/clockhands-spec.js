var sundial = require("../clockhands");

describe('sundial')

  describe('angle')
    context('noon')
      beforeEach(function({
        sundial.hour = 12;
        sundial.minute = 0;
      }))
      it("should be 0", function(){
        expect(sundial.angle).toBe(0);
      });

      context("3 o'clock")
        beforeEach(function({
          sundial.hour = 3;
          sundial.minute = 0;
        }))
        it("should be 90", function(){
          expect(sundial.angle).toBe(90);
        });

      context("6 o' clock")
        beforeEach(function({
          sundial.hour = 6;
          sundial.minute = 0;
        }))
        it("should be 180", function() {
          expect(sundial.angle).toBe(180);
        });
