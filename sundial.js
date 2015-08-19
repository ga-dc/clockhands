exports.minuteHandAngle = function(minutes){
    return minutes * 6;
  };
  exports.hourHandAngle = function(hour){
    return hour * 30;
  };

  exports.hourHandMoves = function(hour, minutes){
    return 0.5 * (60 * hour + minutes);
  };
