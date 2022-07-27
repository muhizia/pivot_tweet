
exports.up = function(knex) {
    return knex.schema.alterTable('tweets', function(table){
        table.bigInteger("retweet_count").alter();
        table.bigInteger("favorite_count").alter();
    });
};

exports.down = function(knex) {
  
};
