let div = document.getElementById("allChamps")
let btn = document.getElementById("btn")
let champName = document.getElementById("buscarProduto")
function getChamp(champ, x){
  axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)
  .then(response=>{
    champImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${x}.jpg`
    console.log(response.data.data[`${champ}`])
  })
  .catch(error => console.log(error))
}


btn.addEventListener("click", ()=>{
  getChamp(champName.value.charAt(0).toUpperCase() + champName.value.slice(1).toLowerCase(), 0)
})
