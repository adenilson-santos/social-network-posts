const User = require('../models/User')

class UserController {
  async index (req, res) {
    const users = await User.find()

    return res.json(users)
  }

  async store (req, res) {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Você não preencheu seu nome' })
    }

    if (req.file) {
      const { filename } = req.file

      const user = await User.create({ ...req.body, avatar: filename })

      return res.json(user)
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async update (req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)

    return res.json(user)
  }

  async destroy (req, res) {
    const user = await User.findById(req.params.id)

    if (!user) {
      res.status(400).json({ error: 'Usuário não existe' })
    }

    user.remove()
    return res.json({ success: 'Usuário excluído' })
  }
}

module.exports = new UserController()
