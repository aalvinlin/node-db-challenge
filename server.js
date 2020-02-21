const express = require("express");

const projectRouter = require("./projects/projects-router");

const server = express();
server.use(express.json());

server.use("/api", projectRouter);

server.get("/", (req,res) => {
    res.status(200).json({message: "Projects server is running."});
})

module.exports = server;