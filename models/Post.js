const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ``
  },
  list: [{
    type: String,
    default: ``
  }]
  ,
  flag: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model(`posts`, postSchema)
