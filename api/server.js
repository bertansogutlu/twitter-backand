const express = require("express");
const server = express();
server.use(express.json());

const usershRouter = require("./users/users-router");

server.use("/api/users", usershRouter);

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

module.exports = server;