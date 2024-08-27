function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "img/poupro.png";
  } else {
    muñeco.src = "img/pou.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Debes ingresar un texto");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "img/desencriptar.jpeg";
  } else {
    muñeco.src = "img/pou.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Debes ingresar un texto");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const musicToggle = document.getElementById("musicToggle");
  const body = document.body;
  const elementsToToggle = [
    ".container",
    ".texto",
    ".terminos",
    "#titulo-mensaje",
    "#parrafo",
  ];
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Check if dark mode is already enabled in local storage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    elementsToToggle.forEach((selector) => {
      document.querySelector(selector).classList.add("dark-mode");
    });
    darkModeToggle.checked = true;
  }

  // Check if music is already enabled in local storage
  if (localStorage.getItem("music-enabled") === "enabled") {
    musicToggle.checked = true;
    backgroundMusic.play().catch(error => {
      console.error("No se pudo reproducir la música automáticamente:", error);
    });
  }

  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      body.classList.add("dark-mode");
      elementsToToggle.forEach((selector) => {
        document.querySelector(selector).classList.add("dark-mode");
      });
      localStorage.setItem("dark-mode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      elementsToToggle.forEach((selector) => {
        document.querySelector(selector).classList.remove("dark-mode");
      });
      localStorage.setItem("dark-mode", "disabled");
    }
  });

  musicToggle.addEventListener("change", () => {
    if (musicToggle.checked) {
      backgroundMusic.play().catch(error => {
        console.error("No se pudo reproducir la música:", error);
      });
      localStorage.setItem("music-enabled", "enabled");
    } else {
      backgroundMusic.pause();
      localStorage.setItem("music-enabled", "disabled");
    }
  });
});

