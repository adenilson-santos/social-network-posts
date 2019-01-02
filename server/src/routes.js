const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const handle = require('express-async-handler')
const validate = require('express-validation')

const controller = require('./app/controllers')
const validator = require('./app/validators')

// const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.get('/', (req, res) => res.send('Server On.'))

routes.get('/images', handle(controller.FileController.show))

// routes.post('/session', validate(validator.User), handle(controller.SessionController.store))

routes.post(
  '/users',
  upload.single('avatar'),
  handle(controller.UserController.store)
)
routes.get('/users', handle(controller.UserController.index))
routes.put(
  '/users/:id',
  validate(validator.User),
  handle(controller.UserController.update)
)
routes.delete('/users/:id', handle(controller.UserController.destroy))

// routes.use(authMiddleware)

routes.get('/posts', controller.PostController.index)
routes.post('/posts', validate(validator.Post), controller.PostController.store)
routes.delete('/posts/:id', controller.PostController.destroy)

module.exports = routes
