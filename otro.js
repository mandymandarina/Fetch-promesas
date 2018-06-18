window.onload = () => {
  const btngatos = document.getElementById('gatos');
  const btnperros = document.getElementById('perros');
  const btnpajaros = document.getElementById('pajaros');
  
  btngatos.addEventListener('click', () => {
      dogesYCatesEnParalelo();
    })
  
}


function dogesYCatesEnParalelo() {
  Promise.all([
    fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true`),
    fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`),
    fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=10&urls=true&httpsUrls=true`)
  ]).then((responses) => {
    return Promise.all(
      responses.map(
        (response) => {
          return response.json();
        }
      )
    );
  }).then((catesDogesJson) => {
    console.log("Respuesta en paralelo > " + JSON.stringify(catesDogesJson));
    const animalReceptorDiv = document.getElementById("animalReceptor");
    /*catesDogesJson.forEach((jsonElement)=>{
        jsonElement.forEach((animal)=>{
            const animalImg = document.createElement("img");
            animalImg.src = animal;
            animalReceptorDiv.appendChild(animalImg);
        });
    }); //Con forEach*/
    for (let i = 0; i < catesDogesJson.length; ++i) {
      for (let j = 0; j < catesDogesJson[i].length; ++j) {
        const animalImg = document.createElement("img");
        animalImg.src = catesDogesJson[i][j];
        animalReceptorDiv.appendChild(animalImg);
      }
    }
  }).catch((error) => {

  });
}


