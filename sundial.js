module.exports = {
    hour: function getHour(time){
        return parseInt(time.split(':')[0])
    },
    minute: function getMinute(time){
        return parseInt(time.split(":")[1])
    }


}
