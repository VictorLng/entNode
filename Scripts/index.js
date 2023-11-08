const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    console.log("aqui")
    res.send("hi")
})
app.listen(port)

