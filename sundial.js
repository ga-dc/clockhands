exports.sundial = function(hour, minute) {
  // declare hourpos and minutepos variables
  var hourpos;
  var minutepos;
  // calculate hour hand position
  // if hour = 12 we need different math
  if (hour == 12){
    var hourpos = minute / 2
  }
  // hour and minutes affect position of hour hand
  else {
    var hourpos = hour * 30 + minute / 2
  }
  var minutepos = minute * 6;
  if (hourpos - minutepos > 180){
    return 360 - (hourpos - minutepos)
    }
  else {
    return Math.abs(hourpos - minutepos)
  }
}
