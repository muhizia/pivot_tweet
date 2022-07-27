
exports.up = function(knex) {
    return knex.schema.alterTable('tweets', function(table){
        table.string('text', 500).alter();
    });
};

exports.down = function(knex) {
  
};
