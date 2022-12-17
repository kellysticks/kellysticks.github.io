const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter']
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest']

const favStartUps = []
let numFavs

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2])

window.onload = function() {
    //let button = document.getElementById('create')
    //Citing: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', event => {
          if(event.target.id === 'create'){
            let textArea = document.getElementById('xForY') 
            textArea.innerHTML= ''

            const random1 = Math.floor((Math.random() * startupX.length))
            const random2 = Math.floor((Math.random() * startupY.length))

            let currentStartup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
            let textElement = document.createTextNode(currentStartup)
    
            textArea.appendChild(textElement)

          } else if (event.target.id === 'save'){
            if(event.target){
                let textArea = document.getElementById('xForY') 
                favStartUps.push(textArea.innerHTML)
                numFavs++
                console.log(favStartUps)
            } else{

            }


          } else if (event.target.id === 'print'){
            if(favStartUps.length){
                favStartUps.forEach(element =>{
                    let textArea = document.getElementById('favorites')
                    let favList = document.createElement('ul')
                    let favItem = document.createElement('li')
                    let textElement = document.createTextNode(element)
                    favItem.appendChild(textElement)
                    favList.appendChild(favItem)
                    textArea.appendChild(favList)
                })
            }
            else{
                let textArea = document.getElementById('xForY')
                textArea.innerHTML= ''
                let displayMsg = 'You have no start ups favorited! Favorite a start up'
                let textElement = document.createTextNode(displayMsg)
                textArea.appendChild(textElement)

            }

          }

        })
      })

    
  
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  };
