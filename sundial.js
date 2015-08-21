module.exports = {
  getAngleBetweenHands: function(hours, minutes){
    var angle = Math.abs(((60 * hours + minutes) / 2) - (6 * minutes));
    return Math.min(angle, 360 - angle);
  },
  getHourAngle: function(hours, minutes){
    return (60 * hours + minutes) / 2
  },
  getMinuteAngle: function(minutes){
    return 6 * minutes
  }
}
