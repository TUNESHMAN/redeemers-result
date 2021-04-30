exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, colName: "rowValue1" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" },
      ]);
    });
};
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
          courseTitle: "General Knowledge",
          Grade: "A",
          rawScore: "76",
        },
        {
          id: 2,
          courseCode: "ABC432",
          courseTitle: "Agric Extension",
          Grade: "D",
          rawScore: "41",
        },
        {
          id: 3,
          courseCode: "GTM411",
          courseTitle: "Science Knowledge",
          Grade: "C",
          rawScore: "53",
        },
        {
          id: 4,
          courseCode: "SMR407",
          courseTitle: "Social Marketing",
          Grade: "A",
          rawScore: "82",
        },
        {
          id: 5,
          courseCode: "FRU404",
          courseTitle: "Financial Reporting",
          Grade: "E",
          rawScore: "40",
        },
        {
          id: 6,
          courseCode: "MEE487",
          courseTitle: "Mechanics",
          Grade: "B",
          rawScore: "69",
        },
        {
          id: 7,
          courseCode: "EME423",
          courseTitle: "Emergency Management",
          Grade: "E",
          rawScore: "40",
        },
        {
          id: 8,
          courseCode: "YOR464",
          courseTitle: "Yoruba Studies",
          Grade: "E",
          rawScore: "40",
        },
        {
          id: 9,
          courseCode: "UGH484",
          courseTitle: "Biotechnology",
          Grade: "A",
          rawScore: "78",
        },
        {
          id: 10,
          courseCode: "LRY474",
          courseTitle: "Linguistics",
          Grade: "B",
          rawScore: "62",
        },
      ]);
    });
};
