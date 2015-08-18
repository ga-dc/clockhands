exports.sundial = function(hour, minute) {
  // hour = 12 should be considered as hr = 0 so use ternary
  var hrangle = hour == 12 ? minute / 2 : hour * 30 + minute / 2;
  // calculate minangle 360 degrees, 60 minutes so multiply by 6 to get angle
  var minangle = minute * 6;
  // calculate absolute value difference between angles
  var anglediff = Math.abs(hrangle - minangle);
  // find smaller angle difference depending on direction around circle
  return Math.min(360 - anglediff, anglediff);
}
