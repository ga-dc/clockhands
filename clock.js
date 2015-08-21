
module.exports ={
minutehand: function(minutes){
  return 6 * minutes;
},

hourhand: function (hours, minutes){
  return (60 * hours + minutes) / 2
},


}
