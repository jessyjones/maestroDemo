document.addEventListener("DOMContentLoaded", faireDesChoses);

let endroitHeureSurPage ;
let heureActuelle ;
let heureTexte = "";
let deadline;
let diff;
let countdown;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

let myLat ;
let myLong ;


function faireDesChoses()
{
  setInterval(afficherHeure,500)
}

function afficherHeure()
{
  deadline = new Date("Jul 2,2020 17:00:00")//Heure cible
  endroitHeureSurPage = document.getElementById('compteur')
  diff = deadline - heureActuelle;
  heureActuelle = new Date();
  countdown = new Date(diff);
  heureTexte = countdown.getDate() + "J " + countdown.getHours() + ":" + countdown.getMinutes() + ":" + countdown.getSeconds() ;
  endroitHeureSurPage.innerText = heureTexte;
}

function success(pos) {
  var crd = pos.coords;
  myLat = crd.latitude ;
  myLong = crd.longitude ;

  console.log('Votre position actuelle est :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);

  requestData();
}


async function requestData()
{

  let url = "https://api.sunrise-sunset.org/json?lat="+myLat+"&lng="+myLong+"&date=today" ;
  console.log(url);

  let myHeaders = new Headers();

  let myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };

  fetch(url,myInit)
  .then(function(response) {

    return response.json();
  })
  .then(function(monJSON) {

    endroitHeureSurPage = document.getElementById('meteo')
    console.log(monJSON)
        endroitHeureSurPage.innerText = monJSON.results.sunset ;
  });


}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
