module.exports = {
  angleDifference: function( hour, minute ){
    var minuteAngle = ( minute / 60 ) * 360;
    if (hour == 12) {
      hour = 0;
    }
    var hourAngle = ( hour * 30 )  + ( minute / 60 ) * 30;
    var difference= Math.abs(hourAngle - minuteAngle);
    if (difference > 180) {
      difference = 360 - difference;
    }
    return difference;
  },
}
