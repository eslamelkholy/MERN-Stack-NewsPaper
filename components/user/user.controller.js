'use strict'
const auth = require('./auth')
const models = require('../../models')
const User = models.User
const Joi = require('joi')
const { signUp, signIn } = require('./schema')

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
  const validationResult = signUp.validate(req.body, { abortEarly: false})
  if(validationResult.error)
    res.status(400).send(validationResult.error.details[0])
    
  const user = await User.create(req.body)
  const access_token = auth.generateAccessToken(user)
  res.status(201).send({access_token, user})
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({where: { email }})
  if (!user || !User.matchesPassword(password, user.password))
    return res.status(400).send({message : 'Unauthorized User'})
    
  const access_token = auth.generateAccessToken(user)
  res.status(200).send({access_token, user})
}