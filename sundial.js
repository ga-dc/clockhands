//sundial.js

module.exports = {

    hourMinHands: function(hour, minute) {
        var time = []
        if (hour <= 12 && minute <= 60) {
            time.push(hour)
            time.push(minute)
        }
        return time
    },

    hands: function(hours, minutes) {
        var hourHand = 0.5 * (hours * 60 + minutes)
        var minuteHand = 6 * minutes
        var hands = Math.abs(hourHand - minuteHand)
        hands = Math.min(hands, 360 - hands)
        return hands
    }
}
