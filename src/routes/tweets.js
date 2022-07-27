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
    console.log(tweets)
    if (tweets[0]) {
        ctx.status = 201;
        ctx.body = { "status": "success", "tweets": tweets };
    } else {
        ctx.status = 400;
        ctx.body = { "status": "fail", "msg": "failed to insert" };
    }
});

router.put('/edit', async ctx => {
    const { id, lat, long } = ctx.request.body;
    var error = false;

    if(!id) {
        ctx.throw(400, 'Provide a valid ID');
    }
    if (!lat) {
        ctx.throw(400, 'Provide a valid latitude');
    }
    if (!long) {
        ctx.throw(400, 'Provide a valid longitude');
    }
    
    
    const tweets = await tweetsService.updatetweets(id, long, lat);
    
    if (tweets[0]) {
        ctx.status = 201;
        ctx.body = { "status": "success", "msg": "You have successfuly updated a tweets" };
    } else {
        ctx.status = 400;
        ctx.body = { "status": "fail", "msg": "failed to update check if the id exists" };
    }

    
});

module.exports = router.routes();