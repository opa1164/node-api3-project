// require your server and launch it
const express = require("express");

const userRouter = require("./users/userRouter.js");
const postRouter = require("./posts/postRouter.js");


const server = express();

server.use(express.json());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);


const port = 5000;

server.listen(port, () => {
  console.log(`running on port : ${port}`);
});