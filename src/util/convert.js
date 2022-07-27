const timeSince = (dateText) => {

    var date = Date.parse(dateText);
    var secondsOriginal = Math.floor((new Date() - date) / 1000);
    /**
     * absolute value of seconds
     */
    var seconds = Math.abs(secondsOriginal);

    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years " + (secondsOriginal < 0 ? "" : " ago");
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months" + (secondsOriginal < 0 ? "" : " ago");
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days" + (secondsOriginal < 0 ? "" : " ago");
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours" + (secondsOriginal < 0 ? "" : " ago");
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes" + (secondsOriginal < 0 ? "" : " ago");
    }
    return Math.floor(seconds) + " seconds" + (secondsOriginal < 0 ? "" : " ago");
}

module.exports = timeSince;