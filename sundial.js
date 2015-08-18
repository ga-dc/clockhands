exports.calculate = function (hour, minute) {
  a = (0.5 * ( ( 60 * hour ) - (11 * minute) ) )
  if (a <= 180) {
    return a;
  }
  else if ( a > 180) {
    return (360 - a);
  }
};
