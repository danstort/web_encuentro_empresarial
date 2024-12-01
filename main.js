let slideIndex = 1;
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Validar si existen elementos
  if (!slides.length || !dots.length) {
    console.error("Error: No se encontraron elementos con las clases 'mySlides' o 'dot'.");
    return;
  }

  // Ajustar el índice dentro de los límites
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Ocultar todas las diapositivas y desactivar los puntos
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar la diapositiva actual y activar el punto correspondiente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}