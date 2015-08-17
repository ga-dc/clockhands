module.exports = {
    hour: function getHour(time){
        var hour = parseInt(time.split(':')[0])
        if (hour > 12){
            return hour -= 12;
        } else {
            return hour
        }
    },
    minute: function getMinute(time){
        return parseInt(time.split(":")[1])
    },
    hourAngle: function hourAngle(time){
        var hour = this.hour(time);
        if (hour==12){
            return hourAngle = 0;
        } else {
            return hourAngle = 30 * hour;
        }
    },
    minuteAngle: function minuteAngle(time){
        var minute = this.minute(time)
        return minuteAngle = 6 * minute;
    },
    compareAngle: function compareAngle(time){
        var minuteAngle = this.minuteAngle(time)
        var hourAngle = this.hourAngle(time)
        if (hourAngle > minuteAngle){
            return hourAngle - minuteAngle
        } else {
            return minuteAngle - hourAngle
        }
    }
}
