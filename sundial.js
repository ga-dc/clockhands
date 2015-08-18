module.exports = {
  minute: function(minute){
    return (minute * 6);
  },

  hour: function(hour, minute){
    return (hour * 30) + (minute * 0.5);
  },

  angleBetween: function(hour, minute){ 
    hourAngle = this.hour(hour, minute) 
    minuteAngle = this.minute(minute)

    // this.minute is invoking the minute: function above and returns the minute angle into the minuteAngle variable.
    // this.hour is invoking the hour: function above and returns the hour angle into the hourAngle variable.
    var angle = Math.abs( hourAngle - minuteAngle );
    return Math.min(angle, 360 - angle);
  }
};