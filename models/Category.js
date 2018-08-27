const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  flag: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model(`categories`, categorySchema)