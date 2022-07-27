const db = require('../db/db');

class tweetsDAO {
    async getTweets(user_id, type, phrase, hashtag) {
        const obj = await db.select('*').from('tweets').where(function() {
            this.where('tweets.users', user_id);
        })
        
        // .fullOuterJoin('currency', function() {
        //     this.on('invoice_master.invoice_currency_id', '=', 'currency.id');
        // }).andWhere(function() {
        //     this.where('invoice_master.createddate', '<=', enddate)
        // }).andWhere(function() {
        //     if (applicationno) this.where('invoice_master.applicationno', 'like', '%' + applicationno + '%');
        // }).andWhere(function() {
        //     if (applicant) this.where('invoice_master.applicant', 'like', '%' + applicant + '%');
        // }).andWhere(function() {
        //     if (invoice_type !== '0') this.where('invoice_master.invoicetype', 'like', '%' + invoicetype + '%');
        // }).andWhere(function() {
        //     if (invoice_status !== '0') this.where('invoice_master.invoice_status', 'like', '%' + invoice_status + '%');
        // }).orderBy('invoice_master.createddate', 'DESC');

        return obj;
    }
    async updatetweets(id, long, lat, average_tweets){
        const obj = await db('tweet').update({ lat: lat, long: long, average_tweets: average_tweets, updated_at: new Date() }).where({ 'id': id }).returning('id');
        return obj;
    }
    async addtweets(id = null, long, lat, average_tweets) {
        const obj = await db('tweet').insert({ id: id, lat: lat, long: long, average_tweets: average_tweets, created_at: new Date() }).into("tweets").returning('id');
        return obj;
    }
}

module.exports = new tweetsDAO();