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

// Etape 2 : Ajouter des Events Listeners sur les fèches
// On commence par récupérer les éléments
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

// on ajoute un écouteur d'évènement au clic sur les flèches 
//et on affiche un message dans la console pour savoir s'il s'agit d'un clic à droite ou à gauche
arrowLeft.addEventListener("click", () => {
	console.log("clic flèche gauche")
})

arrowRight.addEventListener("click", () => {
	console.log("clic flèche droite")
})

////////////////////////////////////////////////////////////////////
// Etape 3 : ajout des bullets points, autant que de slides
///////////////////////////////////////////////////////////////////
// On compte le nombre de slides
let nombreSlides = slides.length;

// On sélectionne la balise <div> contenant les bullet points (class=dots)
let dotsDiv = document.querySelector('.dots');

// On ajoute les bullet points
for (let i = 0; i < nombreSlides; i++) {
	// création d'un élément span pour chaque slide
    let dot = document.createElement('span');
	// on ajoute la classe css dot aux éléments créés 
    dot.classList.add('dot');
	// on ajoute les éléments créés dans la <div> identifiée
    dotsDiv.appendChild(dot);
}


///////////////////////////////////////////////////////////
// Etape 4 : modifier le slide au clic sur le bouton
///////////////////////////////////////////////////////////

// On défini une variable pour suivre l'index du slide actuel, il commence  O
let i = 0; 

// Fonction pour mettre à jour les dots
function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        if (i === index) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}

// Fonction pour faire défiler les slides
function defileSlides(sens) {
	// on calcul le nouvel index du slide
    i = i + sens;
    if (i < 0) {
        i = slides.length - 1; // Si on est à la première image et qu’on clique à gauche, afficher la dernière image
    }
    if (i > slides.length - 1) {
        i = 0; // Si on est à la dernière image et que l’on clique à droite, afficher la première image
    }
    // On récupère l'image
    let imgSlide = document.querySelector(".banner-img");
    imgSlide.src = "./assets/images/slideshow/" + slides[i].image;

    // on récupère le texte
    let textSlide = document.querySelector("#banner p");
    textSlide.innerHTML = slides[i].tagLine;

	// on appelle la fonction pour mettre à jour les dots
	updateDots(i);
	
}

// On appelle la fonction defileSlides pour afficher la première slide au début
defileSlides(0);

// On ajoute des écouteurs d'événements aux flèches de navigation
arrowLeft.addEventListener("click", () => {
    defileSlides(-1); // Défiler vers la gauche
});

arrowRight.addEventListener("click", () => {
    defileSlides(1); // Défiler vers la droite
});

