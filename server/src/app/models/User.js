const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const Post = require('./Post')

const Schema = mongoose.Schema

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'avatar.svg'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
})

User.statics = {
  generateToken ({ id }) {
    return jwt.sign({ id }, 'app-secret', { expiresIn: 86400 })
  }
}

User.pre('remove', async function (next) {
  await Post.remove({ author: this._id })
  return next()
})

module.exports = mongoose.model('User', User)
