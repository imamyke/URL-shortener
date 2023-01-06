const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlShortenerSchema = new Schema({
  sourceUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('UrlShortener', urlShortenerSchema)