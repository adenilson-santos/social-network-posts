const path = require('path')

class FileController {
  show (req, res) {
    const { avatar } = req.params

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      'public',
      'images',
      avatar
    )

    return res.sendFile(filePath)
  }
}

module.exports = new FileController()
