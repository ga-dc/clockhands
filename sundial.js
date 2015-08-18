module.exports = {

  get_time: function(time){
    return time;
  },

  // validate_time: function(time){
  //   var regex = /^(1[012])|([1-9]):?[0-5][0-9]$/
  //   if (time.match(regex)) {
  //     return true
  //   } else {
  //     return "Please enter a valid time"
  //   }
  // },

  get_hour: function(time){
    var time_array = time.split(":");
    return parseInt(time_array[0]);
  },

  get_minutes: function(time){
    var time_array = time.split(":");
    return parseInt(time_array[1]);
  },

  hour_degrees: function(time){
    hour = this.get_hour(time);
    minutes = this.get_minutes(time);
    return hour * 30 + minutes * .5;
  },

  min_degrees: function(time){
    minutes = this.get_minutes(time);
    return minutes * 6;
  },

  difference: function(time){
    return this.hour_degrees(time) - this.min_degrees(time);
  },

  pos_diff: function(time){
    return Math.abs(this.difference(time))
  },

  valid_difference: function(time){
    return Math.abs(this.pos_diff(time)) % 180;
  }

}
