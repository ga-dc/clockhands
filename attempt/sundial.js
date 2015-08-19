module.exports = {

time: "12:00",

digitalHour: function(time) {
  return parseInt(time.split(':')[0]);
},

digitalMinute: function(time) {
  return parseInt(time.split(':')[1]);
},

minMove: function(digitalMinute){
  return ( digitalMinute * 6 );
},

hourMove: function(digitalHour, digitalMinute){
  var sum = (digitalHour * 30) + (30 * (digitalMinute / 60));
  return sum;
},

angleDiff: function(digitalHour, digitalMinute){
  var diff = Math.abs(( digitalMinute * 6 ) - ((digitalHour * 30) + (30 * (digitalMinute / 60))));
  // return Math.min(diff, 360 - diff);
}

};
