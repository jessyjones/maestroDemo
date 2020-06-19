var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var myLat ;
var myLong ;

function success(pos) {
  var crd = pos.coords;
  myLat = crd.latitude ;
  myLong = crd.longitude ;

  console.log('Votre position actuelle est :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);

  requestWeather();
}


async function requestWeather()
{

  let url = "https://api.sunrise-sunset.org/json?lat="+myLat+"&lng="+myLong+"&date=today" ;

  //http://api.weatherstack.com/current?access_key=eb31b271043a5e5b1aeb221ba2c35a52&query=New%20York
  //let url = "https://get.geojs.io/v1/ip/country/82.251.9.181.json";
  //let url = "https://www.metaweather.com/api/location/search/?lattlong="+myLat + ","+myLong ;
    let response = await fetch(url);
    if (response.ok) {
    let meteoRetour = await response.json();

    console.log(meteoRetour);

    const unixTimeZero = meteoRetour.results.sunset ;
    console.log(unixTimeZero);

    } else {
      alert("HTTP-Error: " + response.status);
    }

}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
