let express = require('express')

let PORT = process.env.PORT || 3000

let app = express()

let sampleDiv = {
  h2: 'This is why we use pug!',
  item1: 'Easier to write html',
  item2: 'Ability to use templates that make code more reusable',
  item3: 'Code becomes cleaner and easier to read',
  item4: 'Fun file symbol'
}

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', sampleDiv)
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
