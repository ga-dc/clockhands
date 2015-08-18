// Exports is the bridge to the contents of sundial-spec

module.exports = {

// Hour Hand Angle Function
hourHand: function( hours, minutes ){
  return (60 * hours + minutes) / 2 ;
},

// Minute Hand Angle Function
minuteHand: function( minutes ){
  return (6 * minutes) ;
},

// Second Hand Angle Function
secondHand: function( seconds ){
  return (6 * seconds) ;
},

// Angle Between Function
angleBetween: function( hours, minutes ){
  return Math.abs(((60 * hours) - (11 * minutes)) * .5) ;
},

}
