module.exports = {
  hourTimeDegrees: function( hourTime, degreesInHourTick ){
    return ( hourTime * degreesInHourTick );
},

  minuteTimeDegrees: function( minuteTime, degreesInMinuteTick ){
  return ( minuteTime * degreesInMinuteTick );
},

}








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
