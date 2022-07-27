
exports.up = function(knex) {
  return knex.schema.alterTable('tweets', function(table) {
    table.string('in_reply_to_status_id').alter();
});
};

exports.down = function(knex) {
  
};
