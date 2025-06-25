const texto = "Versos sin texto";
const destino = document.getElementById("typewriter");
let i = 0;

function escribir() {
  if (i < texto.length) {
    destino.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, 150);
  }
}

document.addEventListener("DOMContentLoaded", escribir);


const frases = [
  "La poesía es el eco de sinfonía del alma.",
  "Escribir es pintar palabras con el alma.",
  "Las letras son alas para tocar el cielo.",
  "No estás improvisando, estás canalizando.",
  "La belleza o el caos que ves en tu exterior radica en el amor que hay en tu interior.",
  "Hay personas que te roban suspiros y versos, en el la ausencia, en el silencio.",
  "Un alma sedienta de hablar, sólo necesita papel y lápiz para crear magia.",
  "¿Cómo quieres que te quiera? sino me dejas quererte.",
  "¿Y si morir no doliera tanto como vivir con el alma rota?.",
  "Sin leerlo en libros, encontré historia en tus ojos, fantasía en tus manos y poesía en tu piel.",
  "Deja que el amor te suceda.",
  "No sólo le escribo poesía, le dejo trozos de mí en cada línea.",
  "Le escribo versos, Versos sin texto, no en papel, en su piel.",
  "Como a una taza de café saboreo tu sonrisa a sorbitos y sin prisa."
  
];

function mostrarFraseAleatoria() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("menuFrase").textContent = frase;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".toggler");

  toggler.addEventListener("change", function () {
    if (this.checked) {
      mostrarFraseAleatoria();
    } else {
      document.getElementById("menuFrase").textContent = "";
    }
  });
});



function ajustarTopPanel() {
  const header = document.querySelector(".sticky-header");
  const panel = document.querySelector(".left-panel");

  if (header && panel) {
    const alturaHeader = header.offsetHeight;
    panel.style.top = `${alturaHeader}px`;
  }
}

// Ejecutar al cargar
window.addEventListener("DOMContentLoaded", ajustarTopPanel);
// Ejecutar si se redimensiona la ventana
window.addEventListener("resize", ajustarTopPanel);
