const express = require('express')
const router = express.Router()
const generateUrl = require('../../generate_url')
const UrlShortener = require('../../model/urlShortener')

router.post("/", (req, res) => {
  const sourceUrl = req.body.sourceUrl
  UrlShortener.find()
  .lean()
  .then(dataUrl => {
    // 例外處理: 確認此網址是否已有短網址
    // 存入原網址為變數
    if (!dataUrl.some(i => i.sourceUrl == sourceUrl)) {
      // 確認此網址沒有短網址 => 產生五碼短網址且短網址不能和資料庫相同 => http://localhost:3000/短網址
      const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
      const upperCaseLetters = lowerCaseLetters.toUpperCase()
      const numbers = '1234567890'
      let randomArray = [
        ...lowerCaseLetters.split(''), 
        ...upperCaseLetters.split(''), 
        ...numbers.split('')
      ]
      // 將原網址和短網址存入資料庫
      const shortUrl = generateUrl(randomArray)
      return UrlShortener.create({sourceUrl, shortUrl})
        .then(() => res.render('shortener', { shortUrl }))
        .catch(error => console.log(error))
    } else {
      // 例外處理: 確認此網址是已有短網址 => 直接產生相同短網址
      const ownUrl = dataUrl.find(i => i.sourceUrl == sourceUrl)
      return res.render('shortener', { shortUrl: ownUrl.shortUrl })
    }
  })
  .catch(error => console.log(error)) 
})

module.exports = router