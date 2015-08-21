module.exports = {
  hourHandAngle: function(h, m){
    return ((60*h + m)/2)
  },
  minuteHandAngle: function(m){
    return(m*6)
  },
  handsAngle: function(h, m){
    // var hourAngle = ((60*h + m)/2)
    // var minuteAngle = (m*6)
    //
    // if (hourAngle > minuteAngle) {
    //   return (hourAngle - minuteAngle)
    // }else{
    //   return (minuteAngle - hourAngle)
    // }
    var change = ((60*h - 11*m)/2)
    return (Math.abs(change))
  }
}
