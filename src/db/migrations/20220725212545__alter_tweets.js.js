
exports.up = function(knex) {
    return knex.schema.table('tweets', function(table) {
        table.renameColumn('user', 'users');
    });
};

exports.down = function(knex) {
  
};
