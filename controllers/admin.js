const bcryptjs = require(`bcryptjs`)
const jwt = require(`jsonwebtoken`)
const User = require(`../models/User`)
const keys = require(`../config/keys`)
const errorHandler = require(`../utils/errorHandler`)

module.exports.login = async function (req, res) {
  try {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
      const passwordResult = bcryptjs.compareSync(req.body.password, candidate.password)
      if (passwordResult) {
        //Генерация токена, пароли совпали
        const token = jwt.sign({
          email: candidate.email,
          userId: candidate._id
        }, keys.jwt, {expiresIn: 60 * 60})

        res.status(200).json({
          token: `Bearer ${token}`
        })
      } else {
        //Пароли не совпали
        res.status(401).json({
          message: `Пароли не совпадают. Попробуйте еще раз.`
        })
      }
    } else {
      res.status(404).json({
        message: `Пользователь с таким email ${req.body.email} не найден.`
      })
    }
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.register = async function (req, res) {

  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    res.status(409).json({
      message: `Такой email ${req.body.email} уже занят, попробуйте другой.`
    })
  } else {

    const salt = bcryptjs.genSaltSync(10)
    const password = req.body.password

    const user = new User({
      email: req.body.email,
      password: bcryptjs.hashSync(password, salt)
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch(e) {
      errorHandler(res, e)
    }
    
  }
}

module.exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};