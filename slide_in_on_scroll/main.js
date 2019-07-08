/* pour éviter tout problème de performances, nous n'exécuterons cette fonction que dans la plupart des cas, quelle que soit la durée écoulée depuis la fonction debunce. */

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args); 
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    
    console.log(`window.scrollY: ${window.scrollY}`);
    console.log(`window.innerHeight: ${window.innerHeight}`);
    sliderImages.forEach(sliderImage => {

      /* à mi-chemin de l'image */
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      console.log(`slideInAt: ${slideInAt}`);
  

      /*  bas de l'image */
      /* `.offsetTop` indique que le haut de l'image est à quelle distance du haut de la fenêtre */
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      console.log(`imageBottom: ${imageBottom}`);
  
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
  
      console.log(`isHalfShown: ${isHalfShown}`);
      console.log(`isNotScrolledPast: ${isNotScrolledPast}`);
  
      if(isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }
  this.addEventListener('scroll', debounce(checkSlide)); 

