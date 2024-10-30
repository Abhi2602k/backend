const express = require('express')
require('dotenv').config()
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World Gandu')
})
app.get('/twitter',(req, res)=>{
  res.send('I am a disco dancer')
})
app.get('/login',(req,res)=>{
  res.send('<h2>ibbhohodfiBDKohdohdOHODh</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

