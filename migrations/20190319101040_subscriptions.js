exports.up = function(knex, Promise) {
  return knex.schema.createTable("subscriptions", table => {
    table.integer("user_id");
    table.integer("book_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable("subscriptions");
};
