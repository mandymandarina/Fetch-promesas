/*window.onload = () => {
  //obtenerGatos();
  dogesYCatesEnParalelo();
  
  
};
/*
//La función puede ser llamada desde cualquier parte
function obtenerDoges() {
  var xhttp = new XMLHttpRequest(); //Objeto que representa la petición (request)
  xhttp.onreadystatechange = () => { //Evento cuando el estado haya cambiado (cuando esté listo) Se ejecutará cuando esté lista, cuando reciba la respuesta
    if (xhttp.readyState == 4 && xhttp.status == 200) { //Todas las respuestas “200 y algo” serán respuestas satisfactorias
      const dogeResponse = JSON.parse(xhttp.responseText); //No usar funciones flechas cuando usamos this.  usar json punto stringify cuando tratemos con objetos 
      const dogeReceptorDiv = document.getElementById("dogeReceptor");
      for (let dogeIndex = 0; dogeIndex < dogeResponse.length; dogeIndex++) {
        const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        dogeImg.src = dogeResponse[dogeIndex];
        dogeReceptorDiv.appendChild(dogeImg);
      }
    }
  };
  xhttp.onerror = () => {

  }
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true", true); //Con GET sólo se accede a datos, NO se envían (Cuando se hace Login, se debería hacer con POST, no con GET). Va el verbo (GET) y luego la petición (URL)
  xhttp.send(); //Aquí se ejecuta la petición

  /*
   * Podemos seguir ejecutando código acá mientras esperamos la respuesta
   */
  //console.log("Holi soy doge");}
/*
// Acá vamos a poner la función para obtener info de gatos
function obtenerGatos() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true`) //Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}
*/

window.onload = () => {
  const btngatos = document.getElementById('gatos');
  const btnperros = document.getElementById('perros');
  const btnpajaros = document.getElementById('pajaros');
  
  btngatos.addEventListener('click', () => {
    obtenerGatos();
    })

  btnperros.addEventListener('click', () => {
      obtenerPerros();
    })  
  
  btnpajaros.addEventListener('click', () => {
        obtenerPajaros();
    })    
  
}



function obtenerGatos() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=2&urls=true&httpsUrls=true`) //Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}

function obtenerPerros() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true`)//Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}

function obtenerPajaros() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=2&urls=true&httpsUrls=true`)//Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}


/*
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

    /*
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



*/
