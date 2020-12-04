// I brought in the database configuration
const db = require("../data/db-config");

// Export the helper function so that it can be used in the formRouter
module.exports = {
  postResult,
  getResult, //Function for adding a new form to the database
};

function postResult({ courseCode, Grade }) {
  // This is the SQL equivalent of INSERT INTO forms (doctor_name, department, doctors_rank,task_description) VALUES (data to be added)
  return db("results").insert({
    courseCode: courseCode,
    Grade: Grade,
  });
}

function getResult() {
  // This is the equivalent of SELECT * from forms
  return db("results");
}
