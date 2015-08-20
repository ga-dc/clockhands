module.exports = {
  //
  // time: {
  //   hours: time.hours
  //   minutes: time.
  // },

  findHourHandAngle: function (hours) {
    return hours * 30;
  },

  findMinuteHandAngle: function (minutes) {
    return minutes * 6;
  },

  findAngle: function (hourHandAngle, minuteHandAngle) {
    var angle = hourHandAngle - minuteHandAngle;
    if (angle < 0) {
      angle = angle * -1;
    }
    if (angle > 180) {
      angle = 360 - angle;
    }
    console.log(angle);
    return angle;
  }

};
