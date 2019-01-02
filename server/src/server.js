const express = require('express')
const validate = require('express-validation')
const Youch = require('youch')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
    this.exceptions()
  }

  database () {
    mongoose.connect(
      'mongodb://localhost:27017/social-network-posts',
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    )
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exceptions () {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)

        return res.send(await youch.toHTML())
      }

      return res
        .json(err.status || 500)
        .json({ error: 'Internal server error.' })
    })
  }
}

module.exports = new App().express
