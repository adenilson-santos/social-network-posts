const User = require('../models/User')

class SessionController {
  async store (req, res) {
    const { name } = req.body

    const user = await User.findOne({ name })

    if (!user) {
      return res.json({ error: 'Usuário não existe, crie uma nova conta.' })
    }

    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
