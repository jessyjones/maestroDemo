document.addEventListener("DOMContentLoaded", faireDesChoses);

let endroitHeureSurPage ;
let heureActuelle ;
let heureTexte = "";

function faireDesChoses()
{
  setInterval(afficherHeure,500)
}

function afficherHeure()
{
  endroitHeureSurPage = document.getElementById('compteur')
  heureActuelle = new Date();
  //console.log(endroitHeureSurPage)
  heureTexte = heureActuelle.getHours() + ":" + heureActuelle.getMinutes() + ":" + heureActuelle.getSeconds() ;
  endroitHeureSurPage.innerText = heureTexte;

}
