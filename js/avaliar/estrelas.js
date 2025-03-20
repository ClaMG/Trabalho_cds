// Seleciona todas as estrelas do documento
const estrelas = document.querySelectorAll(".estrela");

// Percorre cada estrela e adiciona um evento de clique
estrelas.forEach((estrela, index) => {
  
  estrela.addEventListener("click", () => {
    let nota = index + 1; // Define a nota com base no índice da estrela clicada (1 a 5)

    // Remove a seleção de todas as estrelas antes de aplicar a nova seleção
    estrelas.forEach(e => e.classList.remove("selecionada"));

    // Adiciona a classe "selecionada" até a estrela correspondente à nota escolhida
    for (let i = 0; i < nota; i++) {
      estrelas[i].classList.add("selecionada");
    }
  });

});
