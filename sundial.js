module.exports = {

  minuteAngle: function(minute) {
    var angle = 360 * (minute/60)
    if (angle > 180) {
      angle = 360 - angle
        }
    return angle
    }

  hourangle: function(hours, minutes){
    var angle = 360 * (hours/12) + (30 * (minutes/60));
    return angle;
  }
}

  finalangle: function(hours, minutes){
    var minuteAngle = sundial.minuteangle(30);
    var hourAngle = sundial.hourangle(3, 30);
  }
