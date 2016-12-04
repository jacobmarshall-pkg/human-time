/**
 * Print a human readable timestamp to the terminal
 * given a number representing seconds
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: 8/18/2014
 * License: MIT
 */

module.exports = human;

function human(date, includeSuffix) {
  if (typeof includeSuffix === 'undefined') {
    includeSuffix = true;
  }

  var seconds = Math.round((Date.now() - date) / 1000);
  var suffix = includeSuffix ? (' ' + (seconds < 0 ? 'from now' : 'ago')) : '';
  seconds = Math.abs(seconds);

  var times = [
    seconds / 60 / 60 / 24 / 365, // years
    seconds / 60 / 60 / 24 / 30,  // months
    seconds / 60 / 60 / 24 / 7,   // weeks
    seconds / 60 / 60 / 24,       // days
    seconds / 60 / 60,            // hours
    seconds / 60,                 // minutes
    seconds                       // seconds
  ];
  var names = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

  for (var i = 0; i < names.length; i++) {
    var time = Math.floor(times[i]);
    if (time > 1)
      return time + ' ' + names[i] + 's' + suffix;
    else if (time === 1)
      return time + ' ' + names[i] + suffix;
  }

  return includeSuffix ? 'just now' : 'now';
}
