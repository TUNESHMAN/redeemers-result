
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
          rawScore: "76",
        },
        {
          id: 2,
          courseCode: "ABC432",
          Grade: "D",
          rawScore: "41",
        },
        {
          id: 3,
          courseCode: "GTM411",
          Grade: "C",
          rawScore: "53",
        },
        {
          id: 4,
          courseCode: "SMR407",
          Grade: "A",
          rawScore: "82",
        },
        {
          id: 5,
          courseCode: "FRU404",
          Grade: "E",
          rawScore: "40",
        },
      ]);
    });
};
