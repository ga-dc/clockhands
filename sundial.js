module.exports = {

  time: function(hour, min){
      if (min === 5){
        degrees = 30
        return degrees;
      }

      else if (min === 15) {
        degrees = 90
        return degrees;
      }

      else if (min === 30) {
        degrees = 180
        return degrees;
      }

      else if (min === 45) {
        degrees = 90
        return degrees;
      }

      else if (min === 0) {
        degrees = 0
        return degrees;
      }

  }


}
