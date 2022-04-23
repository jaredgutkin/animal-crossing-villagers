// document.querySelector('button').addEventListener('click', getFetch)
// function getFetch(){
//     // const choice = document.querySelector('input').value
//     // console.log(choice)
  
//     const url = `http://acnhapi.com/v1/villagers/1`
  
//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
//           document.querySelector('h2').innerText = data.name['name-USen']
//           document.querySelector('img').src = data.image_uri
//           document.querySelector('p').innerText = data.saying
         
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
//   }
  











const fetchVillager = () => {
    const promises = []
    for (let i = 1; i <= 10; i++){
        const url = `http://acnhapi.com/v1/villagers/${i}`
        promises.push(fetch(url).then( (res) => res.json()))
    }

    Promise.all(promises).then( results => {
        const villager = results.map((data) => ({
            name: data.name['name-USen'],
            image: data.image_uri,
            saying: data.saying
        }))
        displayVillager(villager)
    })
        
  

}

const displayVillager = (villager) => {
    
    const villagerHTMLString = villager.map ( vCard => `
    <li class="card">
        <img class ="cardImage" src = "${vCard.image}"/>
        <h2 class="cardTitle">${vCard.name}</h2>
        <p class="cardSubtitle"> ${vCard.saying}</p>
    </li>
    
    `
   
    )
    .join('')
    
    ACvillager.innerHTML = villagerHTMLString
}

fetchVillager()