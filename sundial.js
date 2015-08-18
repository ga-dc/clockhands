//sundial.js

module.exports = {
    hourMinHands: function(hour, minute) {
        var time = []
        if (hour <= 12 && minute <= 60) {
            time.push(hour)
            time.push(minute)
        }
        return time
    }
}
