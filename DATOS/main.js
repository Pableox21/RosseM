// Inicia las animaciones de la página.
window.addEventListener("load", () => {
  document.body.classList.remove("container");

  // El navegador puede bloquear el autoplay con sonido.
  // Intentamos reproducirlo al entrar y, si lo bloquea, el primer clic/toque
  // dentro de la segunda página lo iniciará.
  const music = document.getElementById("music");

  if (music) {
    music.volume = 1;
    const startMusic = () => {
      const promise = music.play();

      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          // Autoplay bloqueado: esperamos una interacción del usuario.
          document.addEventListener("click", startMusic, { once: true });
          document.addEventListener("touchstart", startMusic, { once: true });
        });
      }
    };

    startMusic();
  }
});
