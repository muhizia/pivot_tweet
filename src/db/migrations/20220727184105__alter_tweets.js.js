
exports.up = function(knex) {
    return knex.schema.alterTable('tweets', function(table){
        table.integer("reply_count")
    });
};

exports.down = function(knex) {
  
};
