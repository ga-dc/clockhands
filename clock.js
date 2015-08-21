module.exports = {

  time: function(hour, minute){
    var hourAngle = hour*(360/12);
    var minuteAngle = minute*(360/60);

    var angle = Math.abs(hourAngle-minuteAngle);

    return angle
  }


}
