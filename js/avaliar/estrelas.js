const estrelas = document.querySelectorAll(".estrela");
    
estrelas.forEach((estrela, index) => {
  estrela.addEventListener("click", () => {
    let nota = index + 1;

    // Remove a seleção de todas as estrelas
    estrelas.forEach(e => e.classList.remove("selecionada"));

    // Adiciona a seleção até a estrela clicada
    for (let i = 0; i < nota; i++) {
      estrelas[i].classList.add("selecionada");
    }

  });
});