// Import the pre-baked middleware
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// Instantiate the server by invoking express
const server = express();
// Import the form router
const resultRouter = require("./result/resultRouter");
// Import the user router
const userRouter = require("./users/usersRouter");

// To read request and body
server.use(express.json());
// Enable CORS so that the server works across all origins
server.use(cors());
server.use(helmet());
server.use(logger);
server.use("/result", resultRouter);
server.use("/user", userRouter);

// Write a dummy endpoint
server.get("/", (req, res) => {
  res.json("<h2>Welcome to redeemers result checker</h2>");
});

// If the endpoint is invalid
server.get("*", (req, res) => {
  res.send(`message: This is an invalid path`);
});

// Create a custom logger middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString}] ${req.method} ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next();
}

// Export the server to be seen by other files
module.exports = server;
