
exports.up = function(knex) {
    return knex.schema.alterTable('tweets', function(table){
        table.integer("reply_count").defaultTo(0).alter();
    });
};

exports.down = function(knex) {
  
};
