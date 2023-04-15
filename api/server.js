const express = require("express");
const server = express();
server.use(express.json());
const { checkUserToken, checkRole } = require("../utils");

const authRouter = require("./auth/auth-router");
const usershRouter = require("./users/users-router");
const tweetsRouter = require("./tweets/tweets-router");
const retweetsRouter = require("./retweets/retweets-router");

server.use("/api/auth", authRouter);
server.use("/api/users", checkUserToken, checkRole('admin'), usershRouter);
server.use("/api/tweets", checkUserToken, tweetsRouter);
server.use("/api/retweets", checkUserToken, retweetsRouter);

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

module.exports = server;