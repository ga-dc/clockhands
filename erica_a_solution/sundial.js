// Exports is the bridge to the contents of sundial-spec

module.exports = {

// Hour Hand Angle Function
hourHand: function( hours, minutes ){
  return (60 * hours + minutes) / 2 ;
},

}
