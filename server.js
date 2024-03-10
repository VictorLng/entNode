
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 3000
const db = require('./module/db');
const user = require('./module/users')
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
async function apiDados(res){
    const consum = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)
    lolApi = await consum.json()
    return lolApi;
}


app.get('/',   (req, res)=>{
    res.render('index', {champT : 1 })
})
app.get('/champions', async function(req, res){
    res.render("championsPage", {champs :  'champion'})
})
app.get('/champ', async function(req, res){
    
    const lolApi = await apiDados();
    //let champProps = Object.keys(lolApi).map(key => lolApi[key])
    champName = req.query.champName
    champName == 'leesin' || champName == 'lee' ? champName = "lee sin" : champName = req.query.champName
    champName == 'jarvan4' || champName == 'jarvan' ? champName = "Jarvan IV" : champName = req.query.champName
    let formatarTexto = formatText(champName)
    res.render("champPage", {nomeCampeao : formatarTexto, lolApi : champProps})
   
})
app.listen(port) //http://localhost:port



