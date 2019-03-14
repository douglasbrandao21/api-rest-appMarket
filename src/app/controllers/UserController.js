const User = require('../models/User')

class UserController {
  async store (req, res) {
    const { email } = req.body

    // Verifica se existe um usuário com email igual no banco
    if (await User.findOne({ email: email })) {
      // Se existe, retorna um JSON de erro
      return res.status(400).json({ error: 'User already exists' })
    }
    // Se não, cria um novo usuário
    const user = await User.create(req.body)
    
    return res.json(user)
  }
}

module.exports = new UserController()
