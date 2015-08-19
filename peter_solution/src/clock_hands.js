module.exports = {
  time: "06:30",
  hour: parseInt(time.substring( 0, 1)),
  minute: parseInt(time.substring( 2, 3 )),
  angle: function(){
    (1/2) * ( (60 * hour) - (11 * minute) )
  }
}
module.exports.angle();
