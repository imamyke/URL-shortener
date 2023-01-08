const express = require('express')
const router = express.Router()
const UrlShortener = require('../../model/urlShortener')

router.get('/', (req, res) => {
  res.render('index')
})

// 導引到短網址原網址
router.get('/:findShortUrl', (req, res) => {
  const findShortUrl = req.params.findShortUrl
  UrlShortener.find()
  .then(dataUrl => {
    // 確認短網址是否為資料庫的短網址 
    if(dataUrl.some(i => i.shortUrl == findShortUrl)) {
      // 取出資料庫的原網址 => 導引到原網址
      const ownUrl = dataUrl.find(i => i.shortUrl == findShortUrl)
      return res.redirect(`${ownUrl.sourceUrl}`)
    } else {
      return res.render('error')
    }
  })
})

module.exports = router