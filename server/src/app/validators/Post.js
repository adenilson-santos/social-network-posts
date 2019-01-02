const Joi = require('joi')

module.exports = {
  body: {
    author: Joi.string().required(),
    content: Joi.string().required()
  }
}
