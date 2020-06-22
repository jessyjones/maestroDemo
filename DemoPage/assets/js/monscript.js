let compteur ;
let time = "" ;
let currentTime ;

document.addEventListener("DOMContentLoaded", function() {
  compteur = document.getElementById("compteur") ;
});


function changeTime()
{
  currentTime = new Date();
  time = currentTime.getHours() + ":" + currentTime.getMinutes()+":" + currentTime.getSeconds()
  compteur.innerText = time ;
}

setInterval(changeTime,1000);
