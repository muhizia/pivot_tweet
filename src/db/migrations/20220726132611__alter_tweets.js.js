
exports.up = function(knex) {
    return knex.schema
    .alterTable('tweets', function(table){
      table.bigInteger('timestamp_ms');
    });
};

exports.down = function(knex) {
  
};
