const Post = require(`../models/Post`)
const errorHandler = require(`../utils/errorHandler`)

module.exports.getAll = async function (req, res) {
  try {
    const posts = await Post.find({})
    res.status(200).json(posts)
  } catch(e) {
    errorHandler(res, e)
  }
}
module.exports.getById = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (e) {
    errorHandler(res, e)
  } 
}
module.exports.create = async function (req, res) {
  try {
    const postData = {
    title: req.body.title,
    text: req.body.text,
    url: req.body.url,
    imageSrc: req.file ? req.file.path : ``,
    list: req.body.list
    }
    const post = new Post(postData)
    await post.save()
    res.status(201).json(post)

  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await Post.remove({_id: req.params.id})
    res.status(200).json({
      message: `Пост удалён.`
    })
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function (req, res) {
  const updated = {
    title: req.body.title,
    text: req.body.text,
    url: req.body.url,
    list: req.body.list
  }
  
  if (req.file) {
    updated.imageSrc = req.file.path
  }

  try {
    const post = await Post.findOneAndUpdate(
      {_id: req.params.id},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(post)
  } catch(e) {
    errorHandler(res, e)
  }
}
