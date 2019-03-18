exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", table => {
    table.increments("id").primary();
    table.integer("users_id");
    table.string("title");
    table.string("author");
    table.string("genre");
    table.string("date");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
