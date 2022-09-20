

    function starter (){
let data;
let array = [];
let gameId = [];

let names = [];

let id = [];
let gameTemplateId = [];
let urls = [];

    fetch('https://mystake.com/api/game/getgametemplates_dev/1/1/1')           //api for the get request
    .then(response => response.json())
    .then(dataa => {console.log(dataa);
    const data = dataa;
    console.log(data.GameTemplates)
    

        //saving defaultordering to array
    for(let i = 0; i < data.GameTemplates.length ; i++){
    if(data.GameTemplates[i].DefaultOrdering < 60){
        array.push(data.GameTemplates[i]);
        gameId.push(data.GameTemplates[i].GameId)
    }
        }

        //saving gameIds
    for(let i = 0; i < data.GameTemplateGames1.length; i++){
        for(let k = 0; k < gameId.length; k++){
            if(data.GameTemplateGames1[i].GameId == gameId[k]) {
                id.push(data.GameTemplateGames1[i].ID);
                gameTemplateId.push(data.GameTemplateGames1[i].GameTemplateId)
            }
        }
     }

        //saving Names
     for(let i = 0; i < data.GameTemplateNameTranslations.length; i++){
        for(let k = 0; k < gameTemplateId.length; k++){
            if(gameTemplateId[k] == data.GameTemplateNameTranslations[i].GameTemplateId){
                names.push(data.GameTemplateNameTranslations[i].Value)
            }
        }
     }

      for(let i  = 0 ; i < data.GameTemplateImages.length ; i++ ){
        for(let k = 0; k < gameTemplateId.length; k++){
            if(gameTemplateId[k] == data.GameTemplateImages[i].GameTemplateId){
                urls.push(data.GameTemplateImages[i].Url)
            }
        }
      }

    
     console.log(array)
     console.log(gameId)
     console.log(data.GameTemplateGames1)
     console.log(id)
     console.log(gameTemplateId)
     console.log(data.GameTemplateNameTranslations)
    



     console.log(names)
     console.log(urls)

     const container = document.querySelector('.games');

     for(let i = 0; i < 60; i++){
        let div = document.createElement("div")
        container.appendChild(div)
        div.appendChild(document.createElement('img')).src = 'https://static.inpcdn.com/' + urls[i];
        let name = document.createElement("p")
        name.id = 'name'
        name.innerText = names[i]
        div.appendChild(name)
     }

    })

}
starter();





    
