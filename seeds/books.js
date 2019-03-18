exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          id: 1,
          users_id: 2,
          title: "Tropic Of Cancer",
          author: "Henry Miller",
          genre: "Autobiographical",
          date: "1939",
          image: ""
        },
        {
          id: 2,
          users_id: 3,
          title: "The Unbearable Lightness Of Being",
          author: "Milan Kundera",
          genre: "Philosophical",
          date: "1980",
          image: ""
        },
        {
          id: 3,
          users_id: 1,
          title: "Demons",
          author: "Fyodor Dostoevsky",
          genre: "Psychological",
          date: "1879",
          image: ""
        }
      ]);
    });
};
