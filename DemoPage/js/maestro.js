document.addEventListener("DOMContentLoaded", faireDesChoses);

//Crééer les variables
let endroitHeureSurPage ;
let heureActuelle ;
let heureTexte = "";
let deadline;
let diff;
let countdown;

function faireDesChoses()
{
  setInterval(afficherHeure,500)
}

function afficherHeure()
{
  deadline = new Date("Jul 2,2020 17:00:00")//Heure cible
  endroitHeureSurPage = document.getElementById('compteur')
diff = deadline - heureActuelle;
//console.log(diff)
  heureActuelle = new Date();
  countdown = new Date(diff);
  //console.log(endroitHeureSurPage)
  heureTexte = countdown.getDate() + "J " + countdown.getHours() + ":" + countdown.getMinutes() + ":" + countdown.getSeconds() ;
  endroitHeureSurPage.innerText = heureTexte;

}
