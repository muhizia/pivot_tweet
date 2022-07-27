
exports.up = function(knex) {
    return knex.schema.alterTable('tweets', function(table){
        table.string('quoted_status_id_str');
    });
};

exports.down = function(knex) {
  
};
