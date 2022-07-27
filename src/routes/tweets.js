/**
 * This is the route file which contains get requests routes.
 *
 * @author Aristide Muhizi
 *
 * @email: muhizia4@gmail.com
 *
 *
 */
require('dotenv').config()
const koaRouter = require('koa-router');
const router = new koaRouter();
const tweetsService = require('../services/tweets')
const util = require('../util/validate')

router.get('/q2', async ctx => {
    const { user_id, type, phrase, hashtag } = ctx.request.query;
    
    if (!user_id) {
        ctx.throw(400, 'Provide a valid user_id');
    }
    if (!type) {
        ctx.throw(400, 'Provide a valid type');
    }
    if (!phrase) {
        ctx.throw(400, 'Provide a valid phrase');
    }
    if (!hashtag) {
        ctx.throw(400, 'Provide a valid hashtag');
    }
    
    const tweets = await tweetsService.getTweets(user_id, type, phrase, hashtag);
    // console.log(tweets)
    if (tweets[0]) {
        let interaction_score, hashtag_score, keywords_score, final_score = 1;
        
        let TEXT = "TeamCoolCloud,1234-0000-0001\n"
        // Looping throught the returned tweets.
        tweets.forEach( (item, index)=> {
            
            // check if the language inclues in the allowed list
            if(util.check_lang(item.lang)) {
                
                // Calculate the three parameters
                interaction_score = util.calculate_interaction_score(item.reply_count, item.retweet_count);
                hashtag_score = util.calculate_hashtag_score(util.calculate_same_tag_count(item.retweet_count));
                keywords_score = util.calculate_keywords_score(util.calculate_number_of_matches(item.retweet_count));
                
                // calculate the final score whti the given formula
                final_score = interaction_score * hashtag_score * keywords_score;

                if (final_score > 0){
                    //user ID, (2) latest screen_name, (3) latest description,
                    // and (4) latest contact tweet of the type specified in the query and with the user in the query.

                    TEXT = `${TEXT}${item.users}\t${item.screen_name}\t${item.description}\t${item.text}`
                }
            }
        });
        ctx.status = 201;
        ctx.body = TEXT //{ "status": "success", "tweets": tweets, "interaction_score": {interaction_score, hashtag_score, keywords_score} };
    } else {
        ctx.status = 400;
        ctx.body = { "status": "fail", "msg": "failed to insert" };
    }
});

module.exports = router.routes();