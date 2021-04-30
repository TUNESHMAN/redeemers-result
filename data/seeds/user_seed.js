exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "1030GD005", password: "nopassword" },
        { id: 2, username: "15GT007", password: "nopassword" },
        { id: 3, username: "18GT007", password: "nopassword" },
        { id: 4, username: "50GT007", password: "nopassword" },
      ]);
    });
};
