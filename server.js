const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname,'public')))

app.set("view engine", "ejs")


app.get('/', (req, res)=>{
   var blink =  "bom dia"
    res.render('index', {loggin : blink})
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

