'use strict'
const auth = require('./service/auth')
const { signUp } = require('./schema')

exports.allUsers = async (req, res) => {
  const users = await auth.findAllUsers()
  return res.status(200).send(users)
}

exports.register = async (req, res) => {
  const validationResult = signUp.validate(req.body, { abortEarly: false})
  if (validationResult.error)
    return res.status(400).send({message: validationResult.error.details[0].message})
  
  const checkIfUserExists = await auth.findUserByEmail(req.body.email)
  if (checkIfUserExists)
    return res.status(400).send({message: 'Sorry This Email Already Exists'})

  const user = await auth.createUser(req)
  const access_token = auth.generateAccessToken(user)
  return res.status(201).send({access_token, user})
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await auth.findUserByEmail(email)
  if (!user || !auth.matchesPassword(password, user.password))
    return res.status(400).send({message : 'Unauthorized User'})
    
  const access_token = auth.generateAccessToken(user)
  return res.status(200).send({access_token, user})
}