const { default: axios } = require('axios');
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 3000

//O caminho para links e afins
app.use(express.static(path.join(__dirname,'public')))
// Body Parser usado para pegar os dados de um formulario
let urlEncodedParser = app.use(bodyParser.urlencoded({extended: false }))
let jsonParser = app.use(bodyParser.json())
//engine para carregar o "html"
app.set("view engine", "ejs")




app.get('/', (req, res)=>{
    res.render('index', {})
})
app.get('/champion',  (req, res)=>{
    
    res.render("champPage", {nomeCampeao :  req.query.champName})
   
})
app.get('/google', (req, res)=>{
    //clone do google(demems)
    res.send("google.com")
})

app.listen(port) //http://localhost:port


