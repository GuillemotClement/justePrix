// Etape 1 - Sélectionner nos éléments
let input       = document.querySelector("#prix");
let error       = document.querySelector("small");
let formulaire  = document.querySelector("#formulaire");
// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 1001);
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
 
// Etape 5 - Agir à l'envoi du formulaire

// Etape 6 - Créer la fonction vérifier