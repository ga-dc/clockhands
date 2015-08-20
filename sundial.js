module.exports = {
  minuteAngle: function(minute) {
    var angle = 360 * (minute/60)
    if (angle > 180) {
      angle = 360 - angle
    }
    return angle
  },
  hourAngle: function(hour, minute) {
    var angle = 360 * (hour/12) + (30 * (minute/60))
    if (angle > 180) {
      angle = 360 - angle
    }
    return angle
  },
  finalAngle: function(minuteAngle, hourAngle) {
    var angle;
    if (minuteAngle > hourAngle) {
      angle = minuteAngle - hourAngle;
    }
    else {
      angle = hourAngle - minuteAngle;
    }
    return angle;
  },
  angle: function(hour, minute) {
    var minuteAngle = this.minuteAngle(minute);
    var hourAngle = this.hourAngle(hour, minute);
    var angle = this.finalAngle(minuteAngle, hourAngle);
    return angle;
  }
}





// 360 / (minutes/60)
//
// 360 / (hours/12) + (30/(minutes/60))
