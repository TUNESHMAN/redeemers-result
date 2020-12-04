exports.up = function (knex) {
  // Create the forms table
  return knex.schema
    .createTable("results", (table) => {
      table.increments(); //This will create primary keys that auto-increments
      table.string("courseCode", 128).unique().notNullable();
      table.string("Grade").notNullable();
    })
    .createTable("users", (user) => {
      user.increments();
      user.string("username", 128).unique().notNullable();
      user.string("password", 128).notNullable();
    });
};

exports.down = function (knex) {
  // Destroy the forms table if it exists
  return knex.schema.dropTableIfExists("users").dropTableIfExists("results");
};
