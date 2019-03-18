exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("subscriptions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("subscriptions").insert([
        { book_id: 1, user_id: 1 },
        { book_id: 2, user_id: 2 },
        { book_id: 3, user_id: 3 },
        { book_id: 1, user_id: 1 },
        { book_id: 2, user_id: 2 },
        { book_id: 3, user_id: 3 },
        { book_id: 1, user_id: 1 }
      ]);
    });
};
