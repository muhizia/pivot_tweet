
exports.up = function(knex) {
    return knex.schema
  .alterTable('users', function(table){
    table.string('profile_banner_url');
  });
};

exports.down = function(knex) {
  
};
