const path = require('path')

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })

  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey-form.html'))
  })

  app.get('/buyers', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/all-entries.html'))
  })

  app.get('/buyers/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/entry.html'))
  })
  app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/chat.html'))
  })
}
