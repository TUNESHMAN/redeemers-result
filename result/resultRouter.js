const express = require("express");
// Import the helper functions and save it in a variable
const result = require("./resultDB");
const restricted = require("../auth/restricted-middleware");

// Bring in the router
const router = express.Router();

// The forms endpoint here 👇👇👇
// Endpoint for adding forms
router.post("/", (req, res) => {
  // We are adding a new form so we need req.body
  const newResult = req.body;

  result
    .postResult(newResult)
    .then((freshResult) => {
      res.status(201).json({ message: `New result uploaded`, newResult });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Endpoint for getting forms
router.get("/", restricted, (req, res) => {
  result
    .getResult()
    .then((resultInfo) => {
      res.status(200).json(resultInfo);
    })
    .catch((error) => {
      res.status(404).json({ stack: error.stack, message: error.message });
    });
});

module.exports = router;
