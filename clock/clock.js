module.exports= {
  angle: function (hourHand, minuteHand) {
      hAngle = 0.5 * (hourHand * 60 + minuteHand);
      mAngle = 6 * minuteHand;
      angle = Math.abs(hAngle - mAngle);
      angle = Math.min(angle, 360 - angle);
      return angle;
  }

}
