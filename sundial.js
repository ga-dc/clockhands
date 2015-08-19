module.exports = {

  //get a time.
  get_time: function(hour, minute){
    var minuteAngle = (minute / 60) * 360;
    if (hour === 12) {
      hour = 0;
    }
    var hourAngle = (hour * 30) + (minute / 60)
    var difference= Math.abs(hourAngle - minuteAngle);
  if (difference > 180) {
    difference = 360 - difference;
  }
  return difference;
  }

  //the math?
  // var hours = hours
  // var minutes = minutes
  // var angle =  Math.abs(minutes - hours) * 30 % 180;

};
