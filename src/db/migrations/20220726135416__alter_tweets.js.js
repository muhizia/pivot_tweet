
exports.up = function(knex) {
    
    return knex.schema
    .alterTable('tweets', function(table){
      table.bigInteger('display_text_range');
    });
};

exports.down = function(knex) {
  
};
