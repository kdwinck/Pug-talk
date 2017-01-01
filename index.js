let express = require('express')

let PORT = process.env.PORT || 3000

let app = express()

let sampleData = {
  title: 'Pug Demo',
  h1: 'This is pug',
  p: 'Pug Life!',
  item1: 'Item 1',
  item2: 'Item 2'
}

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', sampleData)
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
