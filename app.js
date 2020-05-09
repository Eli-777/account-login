const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./login_check.js')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const login = loginCheck(options)
  console.log('req.body', req.body)
  if (login === 'Username/Password 錯誤'){
    res.render('index', { options: options, login: login })
  }else {
    res.render('accout', { login: login })
  }
  
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})