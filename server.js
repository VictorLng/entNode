const { default: axios } = require('axios');
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 3000
const db = require('./module/db');
const { json } = require('sequelize');
const { accessSync } = require('fs');

//O caminho para links e afins
app.use(express.static(path.join(__dirname,'public')))
// Body Parser usado para pegar os dados de um formulario
let urlEncodedParser = app.use(bodyParser.urlencoded({extended: false }))
let jsonParser = app.use(bodyParser.json())
//engine para carregar o "html"
app.set("view engine", "ejs")
function formatText(textToFormat){
    return textToFormat.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
        return index === 0 ? word.toUpperCase() : word.toUpperCase()
    }).replace(/\s+/g,'');
}


app.get('/',   (req, res)=>{
    res.render('index', {champT : 1 })
})
app.get('/champions', async function(req, res){
    res.render("championsPage", {champs : "champName"})
})
app.get('/champ', async function(req, res){
    const getApi = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`);
    const lolApi = await getApi.json();
    const champProps = Array();
    champProps['passive'] = 'passive'
    champProps['abilityQ'] = 'abilidade'
    champProps['abilityW'] = 'abilidade'
    champProps['abilityE'] = 'abilidade'
    champProps['utimate'] = 'utimate'
    console.log(lolApi);
    //let champProps = Object.keys(lolApi).map(key => lolApi[key])
    champName = req.query.champName
    champName == 'leesin' || champName == 'lee' ? champName = "lee sin" : champName = req.query.champName
    champName == 'jarvan4' || champName == 'jarvan' ? champName = "Jarvan IV" : champName = req.query.champName
    let formatarTexto = formatText(champName)
    res.render("champPage", {nomeCampeao : formatarTexto, lolApi : champProps})
   
})

app.get('/maneirao', async function(req, res){  
    const getApi = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`);
    const lolApi = await getApi.json();
    console.log(lolApi)
    res.render('index', {champT : filter })
  })

app.listen(port) //http://localhost:port



