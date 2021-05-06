const users = require('../users/users-model');

function logger(req, res, next) {
  // DO YOUR MAGIC
  const method = req.method;
  const url = req.originalUrl;
  let date = new Date();
  console.log(`Sent a ${method} request to ${url} at ${date}`);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const{id} = req.params.id;

  users.getById(id)
    .then( found => found.id == id && next())
    .catch(err =>res.status(400).json({message:"user not found"}))

    next()

}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body.name) {
    res.status(400).json({message: "Missing required name field"})
  }
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body.text) {
    res.status(400).json({message: "Missing required text field"})
  }
  next()
}

// do not forget to expose these functions to other modules
module.exports = {logger, validateUserId, validateUser, validatePost};