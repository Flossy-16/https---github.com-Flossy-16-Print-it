const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//////////////////////////////////////////////////////////
// Etape 2 : Ajouter des Events Listeners sur les fèches
//////////////////////////////////////////////////////////

// On commence par récupérer les éléments
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

// on ajoute un écouteur d'évènement au clic sur les flèches 
// (mis en commentaire pour garder trace mais non utile car doublon avec l.112 du code)
//et on affiche un message dans la console pour savoir s'il s'agit d'un clic à droite ou à gauche
//arrowLeft.addEventListener("click", () => {
	//console.log("clic flèche gauche")
//});

//arrowRight.addEventListener("click", () => {
	//console.log("clic flèche droite")
//});

////////////////////////////////////////////////////////////////////
// Etape 3 : ajout des bullet points, autant que de slides
///////////////////////////////////////////////////////////////////

// On compte le nombre de slides
let nombreSlides = slides.length;

// On sélectionne la balise <div> contenant les bullet points (class=dots)
let dotsDiv = document.querySelector('.dots');

// On défini une variable pour suivre l'index du slide actuel, il commence  O
let i = 0;

// On ajoute les bullet points
for (let i = 0; i < nombreSlides; i++) {
	// création d'un élément span pour chaque slide
    let dot = document.createElement('span');
	// on ajoute la classe css dot aux éléments créés 
    dot.classList.add('dot');
	// on ajoute les éléments créés (enfant) dans la <div> identifiée (parent)
    dotsDiv.appendChild(dot);
}

///////////////////////////////////////////////////////////
// Etape 4 : modifier le slide au clic sur les fleches
///////////////////////////////////////////////////////////

// Fonction pour mettre à jour les dots pour indiquer la slide affichée
function updateDots(iActive) {
    // on sélectionne tous les éléments HTML avec la classe dot, qui représentent les dots du slider
    let dots = document.querySelectorAll('.dot');
    // on crée une boucle qui parcourt tous les dots
    for (let i = 0; i < dots.length; i++) {
        // on ajoute une condition qui vérifie si l'index actuel de la boucle correspond à l'index de la slide active
        if (i === iActive) {
            // Si l'index de la boucle correspond à celui de la slide active, on lui ajoute la classe dot_selected
            dots[i].classList.add('dot_selected');
        } else {
            // Sinon, on supprime la classe
            dots[i].classList.remove('dot_selected');
        }
    }
}

// Fonction pour faire défiler les slides
function defileSlides(sens) {
	// on calcul le nouvel index du slide (en ajoutant ou en soustrayant la valeur "sens")
    // sens représentant la direction : si sens=-1 => defilement à gauche ; si sens=1 => defilement à droite
    i = i + sens;
    // on vérifie que l'index de la slide reste dans les limites du tableau 
    if (i < 0) {
        i = slides.length - 1; // Si on est à la première image et qu’on clique à gauche, afficher la dernière image
    }
    if (i > slides.length - 1) {
        i = 0; // Si on est à la dernière image et que l’on clique à droite, afficher la première image (0)
    }
    // On récupère l'image
    let imgSlide = document.querySelector(".banner-img");
    // on met à jour l'attribut src de l'image pour afficher la nouvelle image de la slide.
    imgSlide.src = "./assets/images/slideshow/" + slides[i].image;

    // on récupère le texte
    let textSlide = document.querySelector("#banner p");
    // on met à jour le contenu pour afficher le nouveau texte de la slide
    textSlide.innerHTML = slides[i].tagLine;

	// on appelle la fonction pour mettre à jour les dots lors du défilement
	updateDots(i);
	
}

// On appelle la fonction defileSlides pour afficher la première slide (0) avec mise à jour du dot au début lors du chargement de la page
defileSlides(0);

// On ajoute des écouteurs d'événements aux flèches de navigation et on déclenche la fonction au clique sur les flèches
arrowLeft.addEventListener("click", () => {
    defileSlides(-1); // Défiler vers la gauche
    console.log("clic flèche gauche")
});

arrowRight.addEventListener("click", () => {
    defileSlides(1); // Défiler vers la droite
    console.log("clic flèche droite")
});

