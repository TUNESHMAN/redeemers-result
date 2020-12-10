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
        {
          id: 6,
          courseCode: "MEE487",
          Grade: "B",
          rawScore: "69",
        },
        {
          id: 7,
          courseCode: "EME423",
          Grade: "E",
          rawScore: "40",
        },
        {
          id: 8,
          courseCode: "YOR464",
          Grade: "E",
          rawScore: "40",
        },
        {
          id: 9,
          courseCode: "UGH484",
          Grade: "A",
          rawScore: "78",
        },
        {
          id: 10,
          courseCode: "LRY4174",
          Grade: "B",
          rawScore: "62",
        },
      ]);
    });
};
