module.exports = {

hourAngle: function(hours) {
  var hourAngle = hours * 30;
  return hourAngle;
},
minuteAngle: function(minutes) {
  var minuteAngle = minutes * 6;
  return minuteAngle;
},
sundial: function(hourAngle, minuteAngle) {
  var angleBetween = 0;

  if (hourAngle > minuteAngle) {
    angleBetween = hourAngle - minuteAngle;
  };
  if(minuteAngle > hourAngle) {
    angleBetween = minuteAngle - hourAngle;
  };
  if(angleBetween > 180) {
    angleBetween = 360 - angleBetween
  };
  return angleBetween;
}


}
