/* ouvrir ou fermer la modal correspondante au click sur le logo correspondant */
document.querySelector("#logoBakhtech").onclick = function() {  
    document.querySelector("#modalBakhtech").style.display=(window.getComputedStyle(document.querySelector('#modalBakhtech')).display=='none') ? "block" : "none";
}
document.querySelector("#logoRivp").onclick = function() {  
    document.querySelector("#modalRivp").style.display=(window.getComputedStyle(document.querySelector('#modalRivp')).display=='none') ? "block" : "none";  
}
document.querySelector("#logoSeni").onclick = function() {  
    document.querySelector("#modalSeni").style.display=(window.getComputedStyle(document.querySelector('#modalSeni')).display=='none') ? "block" : "none";  
}

/* déplace le logo a gauche au click */
var translateLogoBakhtech = document.getElementById("logoBakhtech")
var modalBakhtech = document.getElementById("modalBakhtech")

translateLogoBakhtech.addEventListener("click", function() {
    if(screen.width>520) {
        if (modalBakhtech.style.display == 'block') {
            translateLogoBakhtech.style.transform = "translateX(-700px)";
            translateLogoBakhtech.style.transitiontimingfunction = "linear";
            translateLogoBakhtech.style.transition = "1s";
        } else {
            translateLogoBakhtech.style.transform = "translateX(0px)"
        }
    }
});

var translateLogoRivp = document.getElementById("logoRivp")
var modalRivp = document.getElementById("modalRivp")
translateLogoRivp.addEventListener("click", function() {
    if(screen.width>520) {
        if (modalRivp.style.display == 'block') {
            translateLogoRivp.style.transform = "translateX(-700px)";
            translateLogoRivp.style.transitiontimingfunction = "linear";
            translateLogoRivp.style.transition = "1s";
        } else {
            translateLogoRivp.style.transform = "translateX(0px)"
        }
    }
});

var translateLogoSeni = document.getElementById("logoSeni")
var modalSeni = document.getElementById("modalSeni")
translateLogoSeni.addEventListener("click", function() {
    if(screen.width>520) {
        if (modalSeni.style.display == 'block') {
            translateLogoSeni.style.transform = "translateX(-700px)";
            translateLogoSeni.style.transitiontimingfunction = "linear";
            translateLogoSeni.style.transition = "1s";
        } else {
            translateLogoSeni.style.transform = "translateX(0px)"
        }
    }
});
