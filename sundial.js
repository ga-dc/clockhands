module.exports = {
  time: function(hour, minute){
    return hour + ":" + minute;
  },
  minute_angle: function(minute){
    return minute * 6;
  },
  hour_angle: function(hour){
    return hour * 30;
  },
  angle_between_hands: function(hour, minute){
    minute_angle = minute * 6;
    hour_angle = (hour * 30) + (minute * 0.5)
    var result;
    if(hour_angle > minute_angle) {
      result = hour_angle - minute_angle;
    }
    else if(minute_angle > hour_angle) {
      result = minute_angle - hour_angle;
    }
    else {
      result = 0;
    }
    if(result > 180) {
      return 360 - result;
    }
    else{
      return result;
    }
  }
}
