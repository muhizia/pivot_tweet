
exports.up = function(knex) {
    return knex.schema.alterTable('tweets', function(table){
        table.string('display_text_range').alter();
    });
};

exports.down = function(knex) {
  
};
