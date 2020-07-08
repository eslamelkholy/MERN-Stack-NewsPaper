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
  const user = req.user
  const access_token = auth.generateAccessToken(user)
  return res.status(200).send({access_token, user})
}