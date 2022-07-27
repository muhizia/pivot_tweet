
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table){
        table.string('url', 500).alter();
    });
};

exports.down = function(knex) {
  
};
