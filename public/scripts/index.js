let div = document.getElementById("allChamps")
let btn = document.getElementById("btn")
function getChamp(champ){
  axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion/${champ}.json`)
  .then(response=>{
    console.log(response.data.data)
  })
  .catch(error => console.log(error))
}

btn.addEventListener("click", ()=>{
  getChamp("Aatrox")
})
