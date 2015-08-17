function minuteAngle(minute){
  return minute * 6;
}

function hourAngle(hour, minute){
  return (hour * 30)+(minute * 0.5);
  //30 degrees (between each hour) divided by 60(minutes) = 0.5
}

module.exports = {
  minuteAngle: minuteAngle,

  hourAngle: hourAngle,

  angleBetween: function(hour, minute){
    var angle = Math.abs(hourAngle(hour, minute) - minuteAngle(minute));
    return Math.min(angle, 360 - angle);
  }
};
