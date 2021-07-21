const path = require("path");
const express = require("express");
const app = express(); // create express app
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const { Octokit } = require("@octokit/rest");
const cors = require("cors");
require("dotenv").config();

app.use(cors());

// create application/json parser
const jsonParser = bodyParser.json();

const TOKEN = process.env.GITHUB_TOKEN;
const ORGANIZATION = process.env.ORGANIZATION;

// Set up the GitHub API
const github = new Octokit({
  auth: TOKEN,
});

//create rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 2, // limit each IP to 2 requests per windowMs
  handler: function (req, res) {
    return res.send({
      status: 429,
      message: "Too many requests",
    });
  },
});

// add middlewares
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(express.static("public"));
app.use(limiter);

//post request to github

app.post("/api/invite", jsonParser, (req, res) => {
  const { email, username } = req.body;
  github.users
    .getByUsername({
      username: username,
    })
    .then(() => {
      github.orgs
        .createInvitation({
          org: ORGANIZATION,
          email: email,
        })
        .then((invitationData) => {
          res.send({
            status: 201,
            message: "Invitation sent",
          });
        })
        .catch((error) => {
          res.send({
            status: 400,
            message: "Invitation Failed",
          });
        });
    })
    .catch((error) => {
      res.send({
        status: 404,
        message: "User Not Found",
      });
    });
});

// start express server on port 5000
app.listen(process.env.PORT || 5000, function () {
  console.log("Server started on port 5000");
});
