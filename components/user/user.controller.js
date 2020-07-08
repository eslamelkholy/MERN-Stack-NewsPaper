'use strict'
const auth = require('./service/auth')

exports.allUsers = async (req, res) => {
  const users = await auth.findAllUsers()
  return res.status(200).send(users)
}

exports.register = async (req, res) => {
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