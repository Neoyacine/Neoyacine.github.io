// BANNIERE FIXE
// let banner = document.getElementById("fixed-head");

// banner.style.display = "none";
//    // mettre transition
// document.addEventListener("scroll", function(){ 
//     if (document.documentElement.scrollTop > 1000){
//     banner.style.display = "block"}
//     else 
//     banner.style.display = "none"
// });

// ANIMATION APPARATION LORS DU SCOLL
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
           
        } else {
            // REPETITION?
            // entry.target.classList.remove('show');
        }
        // console.log(entry);
    }); 
    // console.log(entries);
});

const hiddenElementsUp = document.querySelectorAll('.hidden-up');
hiddenElementsUp.forEach((el) => observer.observe(el));
const hiddenElementsDown = document.querySelectorAll('.hidden-down');
hiddenElementsDown.forEach((el) => observer.observe(el));
const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observer.observe(el));
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observer.observe(el));


// CARROUSEL DE CITATIONS
let cita0, cita1, cita2, cita3, cita4, cita5, cita6;
cita0 = "L'enseignement de l'informatique ne peut faire de personne un programmeur expert plus que l'étude des pinceaux et du pigment peut faire de quelqu'un un peintre expert."+`"`+ " - Eric S. Raymond";
cita1 = '"'+"Comme la Hongrie, le monde informatique a une langue qui lui est propre. Mais il y a une différence. Si vous restez assez longtemps avec des Hongrois, vous finirez bien par comprendre de quoi ils parlent."+`"`+ "- Dave Barry";
cita2 = '"'+"Je m'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine !"+`"`+ " - Inconnu(e)";
cita3 = '"'+"Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez."+`"`+ " - Jeff Atwood";
cita4 = '"'+"N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre."+`"`+ " - Martin Fowler";
cita5 = '"'+"N'importe quel code que vous avez écrit depuis 6 mois ou plus sans y regarder pourrait tout aussi bien avoir été écrit par quelqu'un d'autre"+`"`+ " - Alan Eagleson";
cita6 = '"'+"Aujourd’hui, la programmation est devenue une course entre le développeur, qui s’efforce de produire de meilleures applications à l’épreuve des imbéciles et l’univers, qui s’efforce de produire de meilleurs imbéciles. Pour l’instant, l’univers a une bonne longueur d’avance"+`"`+ "— Rich Cook";


 // SLIDER DE CITATIONS 
const citation = document.querySelector(".citations");
let citations = [cita0, cita1, cita2, cita3, cita4, cita5, cita6];
let slideIndex = 0;

function addSlide(n){ 
    slideIndex += n;
    if ( slideIndex > citations.length -1){
        slideIndex = 0;}
    else if (slideIndex < 0 ){
        slideIndex = citations.length -1 ;};
    citation.innerHTML = `${citations[slideIndex]}`
}
// setInterval("addSlide(1)", 10000);


//  SLIDER DE PROJETS

let snake, apiP1, apiP2, maquette1, maquette2, apiMeteo;
snake = `<a draggable="false" class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Snake.github.io/"><img draggable="false" src="img/projets/Snake.png" alt=""></a>`
apiP1 = `<a draggable="false" class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/API-Search-D-D.github.io/"><img draggable="false" src = "img/projets/API-Search1.png"></a>`
apiP2 = `<a draggable="false" class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/API-Search-D-D.github.io/"><img draggable="false" src = "img/projets/API-Search2.png"></a>`
maquette1 = `<a draggable="false" class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Maquette-1.github.io/"><img draggable="false" src = "img/projets/maquette-1.png"></a>`
maquette2 = `<a draggable="false" class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Maquette-2.github.io/"><img draggable="false" src = "img/projets/maquette-2.png"></a>`
apiMeteo = `<a draggable="false" class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/api-meteo.github.io/"><img draggable="false" src = "img/projets/meteo.png"></a>`
const slide = [snake, apiP1, apiP2, maquette1, maquette2, apiMeteo];
const projets = document.querySelector(".projet");

// SLIDER DESCRIPTION

const description = document.getElementById("description")
let descSnake, descApiP1, descApiP2, descMaquette1, descMaquette2, descapiMeteo;
descSnake = `<span><strong>Jeu du Snake</strong></span><br>Projet réalisé pour s'entrainer sur les fonctions, sur les évènements et l'importation de fonctions. Un système de points a été ajouté récemment.</p>`
descApiP1 = `<span><strong>Application de recherche (première page)</strong></span><br>Cette page permet de rechercher parmis des personnages, classes et armes déjà enregistrés. Elle s'effectue à partir de trois caractères, il sera possible de créer à terme son propre personnage. Ce sera utile pour des joueurs de role play du type Dungeons & Dragons.</p>`
descApiP2 = `<span><strong>Application de recherche (deuxième page)</strong></span><br>Apparait uniquement lorsqu'un personnage existant est recherché, une fonctionnalité de suggestion dans la barre de recherche sera implanté. Une liste des personnages existant sera également affiché sur la page de recherche.</p>`
descMaquette1 = `<span><strong>Premier site fait en HTML/CSS</strong></span><br>Il s'agit d'un site fait à partir d'une maquette lors des mes deux premières semaines d'apprentissage pour s'entrainer au HTML/CSS ainsi qu'au responsive.</p>`
descMaquette2 = `<span><strong>Deuxième site fait en HTML/CSS</strong></span><br>Egalement effectué à partir d'une maquette, pour continuer l'application de l'apprentissage d'HTML/CSS.</p>`
descapiMeteo = `<span><strong>Météo (API)</strong></span><br>Utilisation d'une API pour afficher la météo selon votre localisation et l'heure. De multiples améliorations sont prévues pour donner plus d'informations (ajout de la localisation sur la carte google), etc.`
const descriptionSlide = [descSnake, descApiP1, descApiP2, descMaquette1, descMaquette2, descapiMeteo];


let projetIndex = 0;
function Slider(m){
    projetIndex += m;
    
    if ( projetIndex > slide.length -1){
        projetIndex = 0;}
    else if (projetIndex < 0 ){
        projetIndex = slide.length -1 };
    projets.innerHTML = `${slide[projetIndex]}`
    description.innerHTML = `${descriptionSlide[projetIndex]}`
};


//  diaporama des slides:
// FAIRE UNE ANIMATION POUR LE SLIDER
// setInterval("Slider(1)", 10000)


let projet0, projet1, projet2, projet3, projet4, projet5, projet6;
cita0 = "L'enseignement de l'informatique ne peut faire de personne un programmeur expert plus que l'étude des pinceaux et du pigment peut faire de quelqu'un un peintre expert."+`"`+ " - Eric S. Raymond";
cita1 = '"'+"Comme la Hongrie, le monde informatique a une langue qui lui est propre. Mais il y a une différence. Si vous restez assez longtemps avec des Hongrois, vous finirez bien par comprendre de quoi ils parlent."+`"`+ "- Dave Barry";
cita2 = '"'+"Je m'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine !"+`"`+ " - Inconnu(e)";
cita3 = '"'+"Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez."+`"`+ " - Jeff Atwood";
cita4 = '"'+"N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre."+`"`+ " - Martin Fowler";
cita5 = '"'+"N'importe quel code que vous avez écrit depuis 6 mois ou plus sans y regarder pourrait tout aussi bien avoir été écrit par quelqu'un d'autre"+`"`+ " - Alan Eagleson";
cita6 = '"'+"Aujourd’hui, la programmation est devenue une course entre le développeur, qui s’efforce de produire de meilleures applications à l’épreuve des imbéciles et l’univers, qui s’efforce de produire de meilleurs imbéciles. Pour l’instant, l’univers a une bonne longueur d’avance"+`"`+ "— Rich Cook";


