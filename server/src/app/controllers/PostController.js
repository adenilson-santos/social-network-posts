const Post = require('../models/Post')
const User = require('../models/User')

class PostController {
  async index (req, res) {
    const filters = {}

    const posts = await Post.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt',
      populate: ['author']
    })

    return res.json(posts)
  }

  async store (req, res) {
    console.log(req.body.name)
    const user = await User.findOne({ name: req.body.author })

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' })
    }

    const post = await Post.create({ ...req.body, author: user.id })

    return res.json(post)
  }

  async destroy (req, res) {
    const post = await Post.findById(req.params.id)

    if (!post) {
      res.status(400).json({ error: 'Postagem não existe' })
    }

    post.remove()
    return res.json({ success: 'Postagem excluído' })
  }
}

module.exports = new PostController()
