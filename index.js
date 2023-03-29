// bannière fixe
let banner = document.getElementById("fixed-head");

banner.style.display = "none";
   // mettre transition
document.addEventListener("scroll", function(){ 
    if (document.documentElement.scrollTop > 1000){
    banner.style.display = "block"}
    else 
    banner.style.display = "none"
});

 








/* // On creer un array avec nos images
const slide = ["0.jpg", "1.jpg"];
let numero = 0;

// on creer le slider
function changeSlide(sens) {
    numero = numero + sens;
    if (numero = 1)
    numero = 0;
    if (numero = 0)
    numero = 1;
    document.getElementById("slide").src = "img/" + slide[numero];
}


// Fonction pour le thumbnail interactif
function thumbnail(number) {
    document.getElementById("slide").src = "img/" + number + ".jpg";
}




 si on veut avoir un diaporama
On écrit le nom de la fonction et la durée par diapo en ms
setInterval("changeSlide(1)", 4000) */