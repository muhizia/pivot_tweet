
exports.up = function(knex) {
  return knex.schema
  .alterTable('users', function(table){
    table.timestamps();
  });
};

exports.down = function(knex) {
  
};
