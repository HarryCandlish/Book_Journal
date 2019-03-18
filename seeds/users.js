exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          user_name: "John",
          email_address: ""
          // hash: hashSync("test", hello)
        },
        {
          id: 2,
          user_name: "Sarah",
          email_address: ""
          // hash: hashSync("test", hello)
        },
        {
          id: 3,
          user_name: "Tom",
          email_address: ""
          // hash: hashSync("test", hello)
        }
      ]);
    });
};
