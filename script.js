// Etape 1 - Sélectionner nos éléments
let input       = document.querySelector("#prix");
let error       = document.querySelector("small");
let formulaire  = document.querySelector("#formulaire");
// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 1001);
let coups       = 0;
let nbChoisi;
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
 input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = "inline";
    }
    else{
        error.style.display = "none";
    }
 });
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "silver";
        nbChoisi = input.value;
        input.value = '';
        verifier(nbChoisi);
    }
});
// Etape 6 - Créer la fonction vérifier