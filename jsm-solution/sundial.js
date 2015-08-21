module.exports = {
  hourAngle: function(hour){
    return hour * 30;
  },
  minuteAngle: function(minute){
    return minute * 6;
  },
  angleBetween: function(hour, minute){
    var ha = this.hourAngle(hour);
    var ma = this.minuteAngle(minute);
    var diff = Math.abs(ha - ma);
    return (diff < 180) ? diff : 360 - diff;

  }
}
