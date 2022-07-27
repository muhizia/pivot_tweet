
exports.up = function(knex) {
    return knex.schema
  .alterTable('tweets', function(table){
    table.boolean('is_quote_status').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  
};
