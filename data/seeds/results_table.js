exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("results")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("results").insert([
        {
          id: 1,
          courseCode: "GTD400",
          Grade: "A",
        },
        {
          id: 2,
          courseCode: "ABC432",
          Grade: "D",
        },
        {
          id: 3,
          courseCode: "GTM411",
          Grade: "C",
        },
        {
          id: 4,
          courseCode: "SMR407",
          Grade: "A",
        },
        {
          id: 5,
          courseCode: "FRU404",
          Grade: "E",
        },
      ]);
    });
};
