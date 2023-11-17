let div = document.getElementById("allChamps")
let champName = document.getElementById("championName")
let champImage = document.getElementById('champImage')

function consumeApiAndShowImage(champ, x){
  //pegar a api do lol
  axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)
  .then(response=>{
    //usar os parametros para colocar o nome do champ 
    champProps = response.data.data[`${champ}`]
    champImage.src = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${champ}.png` 
    champPropsToArray = Object.keys(champProps).map(key => champProps[key])
   console.log(champProps)
    champPropsToArray.forEach( function(prop , indice){
        
      console.log(champPropsToArray[indice])
    })

  })
  .catch(error => console.log(error))
}

//botão que executa a função 

consumeApiAndShowImage(champName.value , 0)
console.log(champName.value)
