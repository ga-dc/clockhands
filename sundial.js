module.exports = {
  betweenAngle: function(hour, minute){
    var angle = Math.abs(hourHandAngle(hour, minute) - minuteHandAngle(minute));
    return Math.min(angle, 360 - angle);
  },

  hourHandAngle: function(hour, minute){
    return (60 * hour + minute ) / 2 ;
  },

  minuteHandAngle: function(minute){
    return minute * 6;
  }
}

// put these functions in module.exports

// function hourAngle(hour, minute){
//   return (hour * 30) - (minute * 6);
// }
//
// function minuteAngle(minute){
//   return minute * 6;
// }
//
// function betweenAngle(hour, minute){
//   var angle = Math.abs(hourHandAngle(hours, minutes) - minuteHandAngle(minutes));
//   return Math.min(angle, 360 - angle);
// }




// function angleBetweenHands(time){
//   var hours = parseInt(time.split(':')[0]);
//   var minutes = parseInt(time.split(':')[1]);
//   var angle = Math.abs(hourHandAngle(hours, minutes) - minuteHandAngle(minutes));
//   return Math.min(angle, 360 - angle);
// }
//
// function hourHandAngle(hours, minutes){
//   return (60 * hours + minutes) / 2
// }
//
// function minuteHandAngle(minutes){
//   return 6 * minutes
// }
