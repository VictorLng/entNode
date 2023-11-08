const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    console.log("aqui")
    res.render('index', { port : port})
})
app.get('/sobre/:nome', (req, res)=>{
    //mostrar nome do criador e afins
    aux = req.params
    res.send("ola " + aux.nome)
   
})
app.get('/google', (req, res)=>{
    //clone do google(demems)
    res.send("google.com")
})
app.listen(port) //http://localhost:port

