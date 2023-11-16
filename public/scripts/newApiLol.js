let div = document.getElementById("allChamps")
let champName = document.getElementById("championName")
let champImage = document.getElementById('champImage')

function consumeApiAndShowImage(champ, x){
  //pegar a api do lol
  axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)
  .then(response=>{
    //usar os parametros para colocar o nome do champ 
    champImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${x}.jpg` 
    console.log(response.data.data[`${champ}`])
  })
  .catch(error => console.log(error))
}

//botão que executa a função 

consumeApiAndShowImage(champName.value.charAt(0).toUpperCase() + champName.value.slice(1).toLowerCase(), 0)
console.log(champName.value)
