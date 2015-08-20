module.exports = {

  angle: function(hour, minute){
    if(hour == 12){
      hour = 0
    };
    minHand = minute * 6;
    hourHand = (hour * 30)+(minute / 2)

    var angle = minHand - hourHand
    if(Math.abs(angle) <= 180){
      return Math.abs(angle);
    } else {
      return Math.abs(angle)-180;
    }
  }

}
