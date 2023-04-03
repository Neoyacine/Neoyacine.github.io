// bannière fixe
// let banner = document.getElementById("fixed-head");

// banner.style.display = "none";
//    // mettre transition
// document.addEventListener("scroll", function(){ 
//     if (document.documentElement.scrollTop > 1000){
//     banner.style.display = "block"}
//     else 
//     banner.style.display = "none"
// });

let cita0, cita1, cita2, cita3, cita4, cita5, cita6;
cita0 = "L'enseignement de l'informatique ne peut faire de personne un programmeur expert plus que l'étude des pinceaux et du pigment peut faire de quelqu'un un peintre expert."+`"`+ " - Eric S. Raymond";
cita1 = '"'+"Comme la Hongrie, le monde informatique a une langue qui lui est propre. Mais il y a une différence. Si vous restez assez longtemps avec des Hongrois, vous finirez bien par comprendre de quoi ils parlent."+`"`+ "- Dave Barry";
cita2 = '"'+"Je m'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine !"+`"`+ " - Inconnu(e)";
cita3 = '"'+"Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez."+`"`+ " - Jeff Atwood";
cita4 = '"'+"N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre."+`"`+ " - Martin Fowler";
cita5 = '"'+"N'importe quel code que vous avez écrit depuis 6 mois ou plus sans y regarder pourrait tout aussi bien avoir été écrit par quelqu'un d'autre"+`"`+ " - Alan Eagleson";
cita6 = '"'+"Aujourd’hui, la programmation est devenue une course entre le développeur, qui s’efforce de produire de meilleures applications à l’épreuve des imbéciles et l’univers, qui s’efforce de produire de meilleurs imbéciles. Pour l’instant, l’univers a une bonne longueur d’avance"+`"`+ "— Rich Cook";


 // SLIDER DE CITATIONS 
const citation = document.getElementById("citations");
let citations = [cita0, cita1, cita2, cita3, cita4, cita5, cita6];
let slideIndex = 0;

function addSlide(n){ 
    slideIndex += n;
    if ( slideIndex > citations.length -1){
        slideIndex = 0;}
    else if (slideIndex < 0 ){
        slideIndex = citations.length -1 ;};
        // console.log(slideIndex);
    // citations[slideIndex];
    citation.innerHTML = `${citations[slideIndex]}`
}

{/* <a target="_blank" href=""></a> */}

//  SLIDER DE PROJETS

let snake, apiP1, apiP2, maquette1, maquette2;
snake = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Snake.github.io/"><img src="img/projets/Snake.png" alt=""></a>`
apiP1 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/API-Search-D-D.github.io/"><img src = "img/projets/API-Search1.png"></a>`
apiP2 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/API-Search-D-D.github.io/"><img src = "img/projets/API-Search2.png"></a>`
maquette1 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Maquette-1.github.io/"><img src = "img/projets/maquette-1.png"></a>`
maquette2 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Maquette-2.github.io/"><img src = "img/projets/maquette-2.png"></a>`
const slide = [snake, apiP1, apiP2, maquette1, maquette2];
const projets = document.getElementById("projet");

let projetIndex = 0;
// console.log(slide.length);
function Slider(m){
    projetIndex += m;
    
    if ( projetIndex > slide.length -1){
        projetIndex = 0;}
    else if (projetIndex < 0 ){
        projetIndex = slide.length -1 };
        console.log(projetIndex)
    // slide[projetIndex];
    projets.innerHTML = `${slide[projetIndex]}`
    // console.log(projets.innerHTML)
};
//  diaporama des slides:
// FAIRE UNE ANIMATION POUR LE SLIDER
// setInterval("Slider(1)", 8000)


// SLIDER DESCRIPTION
/* let descSnake, descApiP1, descApiP2, descMaquette1, descMaquette2;
descSnake = ``
descApiP1 = ``
descApiP2 = ``
descMaquette1 = ``
descMaquette2 = ``
const slide = [snake, apiP1, apiP2, maquette1, maquette2]; */
