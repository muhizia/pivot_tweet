
exports.up = function(knex) {
    return knex.schema
    .alterTable('tweets', function(table){
      table.string('possibly_sensitive');
    });
};

exports.down = function(knex) {
  
};
