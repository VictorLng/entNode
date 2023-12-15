let div = document.getElementById("allChamps")
let champName = document.getElementById("champName").innerHTML
let champImage = document.getElementById('champImage')

function consumeApi(champ, x){
  //pegar a api do lol
  axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)
  .then(response=>{
    //usar os parametros para colocar o nome do champ 
   let champProps = response.data.data[`${champ}`]

   champPropsToArray = Object.keys(champProps).map(key => champProps[key])

   champPropsToArray.forEach( function(prop , indice){
       
      
    })
    console.log(response)
  })

  .catch(error => console.log(error))
}

//botão que executa a função 

consumeApi(champName , 0)
//console.log(champPropsToArray[1])
