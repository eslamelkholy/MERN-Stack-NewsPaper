const Joi = require('joi')
const auth = require('../service/auth')
const { signUpSchema } = require('../schema')

module.exports = {
  signupValidation: async (req, res, next) => {
      const result = Joi.validate(req.body, signUpSchema);
      if( result.error ) 
        return res.status(400).json({ message : result.error.details[0].message })
      const checkIfUserExists = await auth.findUserByEmail(req.body.email)
      if (checkIfUserExists)
        return res.status(400).send({message: 'Sorry This Email Already Exists'})
      next();
  },
  signInValidation: async (req, res, next) => {
    const { email, password } = req.body
    const user = await auth.findUserByEmail(email)
    if (!user || !auth.matchesPassword(password, user.password))
      return res.status(400).send({message : 'Unauthorized User'})
    req.user = user
    next()
  }
}