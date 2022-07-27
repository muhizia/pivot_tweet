// const indexDAO = require('../dao/tweets');

class tweetsController {
    get_average_tweets(long, lat) {
        var average_tweets = (long + lat)/2;
        return average_tweets;
    }
}

module.exports = new tweetsController();