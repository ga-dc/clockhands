module.exports = {

  angle: function(time) {
    hour = 360 / 12;
    minutes = 360 / 60;
    return time;
  }
  hour: function(hour) {
    return hour * 30;
  },

  minute: function(minutes) {
    return minute * 60;
  }

}
