var div = document.getElementById("menu");  
var ul = document.getElementById("menuchild");
function masquer() {
    ul.classList.toggle("masquer");
}
function afficher() {
    ul.classList.toggle("afficher");
}
/* pour afficher ou masquer le menu */
div.addEventListener("click", function() {
    if(ul.style.display == "flex") {
        masquer();
    } else {
        afficher();
    }
/* change le burger menu en croix */
    div.classList.toggle("change");
})