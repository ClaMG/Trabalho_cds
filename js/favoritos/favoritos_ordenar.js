 // Função para alternar a visibilidade do conteúdo e trocar a imagem
 function toggleContent(buttonId, contentId, imgId, imgClose, imgOpen) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    const img = document.getElementById(imgId);

    button.addEventListener('click', () => {
        content.classList.toggle('contener'); // Alterna a visibilidade

        // Troca a imagem dependendo do estado do conteúdo
        if (content.classList.contains('contener')) {
            img.src = imgOpen;  // Imagem para "abrir"
        } else {
            img.src = imgClose; // Imagem para "fechar"
        }

        // Alterna a visibilidade da seção de formas de ordenar
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
}

// Chama a função para o conteúdo de "Ordenar Produtos"
toggleContent('ordenar_produtos', 'formas_de_ordenar', 'seta_ordenar', '../../../../img/favoritos/icone_seta_baixo.png', '../../../../img/favoritos/icone_seta_direita.png');