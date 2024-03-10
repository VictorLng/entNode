

async function getLolApi(){
    await fetch(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)
.then(response=>{
    const respostaApi = JSON.stringify(response)
    console.log(respostaApi)
})
.catch(error=>{
    console.log(error)
})
}
getLolApi()