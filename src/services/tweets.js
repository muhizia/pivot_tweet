/**
 * This is the route file which contains get requests routes.
 *
 * @author Aristide Muhizi
 *
 * @email: muhizia4@gmail.com
 *
 * @class tweetsService
 *
 */
const tweetsDAO = require('../dao/tweets');
const tweetsController = require('../controller/tweets');
 
class tweetsService {

    // get requested tweets.
    async getTweets(user_id, type, phrase, hashtag) {
        // const average_tweets = tweetsController.get_average_tweets(long, lat);
        return await tweetsDAO.getTweets(user_id, type, phrase, hashtag);
    }

    async addtweets(long, lat) {
        const average_tweets = tweetsController.get_average_tweets(long, lat);
        return await tweetsDAO.addtweets(long, lat, average_tweets);
    }
    async updatetweets(id, long, lat) {
        const average_tweets = tweetsController.get_average_tweets(long, lat);
        return await tweetsDAO.updatetweets(id, long, lat, average_tweets);
    }
}

module.exports = new tweetsService();