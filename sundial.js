module.exports = {

  getAngleHourHand: function( hour, minute ) {
    var hAngle = ( ( 60*hour + minute) / 2 );
    return hAngle;
  },
  getAngleMinuteHand: function( minute ) {
    var mAngle = ( 6 * minute );
    return mAngle;
  },
  getAngleBetweenHands: function( hour, minute) {
    var delta = ( ( 60*hour - 11*minute) / 2);
    return delta;
  }

}
