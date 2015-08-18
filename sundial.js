exports.sundial = function(hour, minute) {
  //use ternary (if statements are so week 2) to calculate hrangle bc if hour = 12 then we need different math
  var hrangle = hour == 12 ? minute / 2 : hour * 30 + minute / 2;
  // calculate minangle 360 degrees, 60 minutes so multiply by 6 to get angle
  var minangle = minute * 6;
  // calculate absolute value difference between angles - find smaller angle difference in circle (should always be 180 or less)
  return Math.min(360 - Math.abs(hrangle - minangle), Math.abs(hrangle - minangle));
}
