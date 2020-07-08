'use strict'
const auth = require('./auth')
const models = require('../../models')
const User = models.User

exports.allUsers = (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}

exports.register = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).send(user)
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({where: { email }})
  if (!user || !User.matchesPassword(password, user.password))
    return res.status(400).send({message : 'Unauthorized User'})
    
  const access_token = auth.generateAccessToken(user)
  res.status(200).send({access_token, user})
}