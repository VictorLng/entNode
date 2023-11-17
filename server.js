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



app.get('/',   (req, res)=>{
    res.render('index', {champT : 1 })
})
app.get('/champion',  (req, res)=>{
    champName = req.query.champName
    let formatarTexto = champName.charAt(0).toUpperCase() + champName.slice(1).toLowerCase()
    res.render("champPage", {nomeCampeao : formatarTexto })
   
})
app.get('/google', (req, res)=>{
    //clone do google(demems)
    res.send("google.com")
})
app.get('/maneirao', async function(req, res){  
    const getApi = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`);
    const lolApi = await getApi.json();
    let filter = 
       JSON.stringify(lolApi.data["Darius"].stats).split(",")
    res.render('index', {champT : filter })
  })

app.listen(port) //http://localhost:port


