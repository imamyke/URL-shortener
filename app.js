const express = require('express')
const app = express()
port = 3000

// Mongoose(資料庫)連線
require('./config/mongoose')

// 載入樣板引擎
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 載入靜態檔案
app.use(express.static('public'))

// 載入 body-parser 解析 HTTP body
app.use(express.urlencoded({ extended: true }))

// 載入 method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// 載入總路由器
const routers = require('./routers')
app.use(routers)

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
})
