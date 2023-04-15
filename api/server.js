const express = require("express");
const server = express();
server.use(express.json());

const authRouter = require("./auth/auth-router");
const usershRouter = require("./users/users-router");
const tweetsRouter = require("./tweets/tweets-router");
const retweetsRouter = require("./retweets/retweets-router");

server.use("/api/auth", authRouter);
server.use("/api/users", usershRouter);
server.use("/api/tweets", tweetsRouter);
server.use("/api/retweets", retweetsRouter);

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

module.exports = server;