const Joi = require('joi')

const email = Joi.string().email().required().label('email')
const name = Joi.string().max(254).required().label('name')
const passwordRegexErrorMessage = 'Password must be between 8-30 Character at least and one Uppercase, one Lowercase, one digit and one Special Characters'
const password = Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{2,50}$/).required().label('Password').options({
  language: {
    string: {
      regex: {
        base: passwordRegexErrorMessage
      }
    }
  }
})

const signUpSchema = Joi.object().keys({
  email,
  name,
  password
})

const signInSchema = Joi.object().keys({
  email,
  password
})

module.exports = {
  signUpSchema,
  signInSchema
}