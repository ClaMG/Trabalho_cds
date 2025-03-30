 // Função para alternar a visibilidade do conteúdo e trocar a imagem
 function toggleContent(buttonId, contentId, imgId, imgOpen, imgClose) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    const img = document.getElementById(imgId);

    button.addEventListener('click', () => {
        content.classList.toggle('contener'); // Alterna a classe 'contener' para mostrar/ocultar

        // Troca a imagem dependendo do estado do conteúdo
        if (content.classList.contains('contener')) {
            img.src = imgOpen;  // Imagem para "abrir"
        } else {
            img.src = imgClose; // Imagem para "fechar"
        }
    });
}

 // Chama a função para o conteúdo de "Gênero"
 toggleContent('button_filtro_generos', 'generos', 'button_filtro_generos', '../../img/todos_produtos/icone_seta_direita.png', '../../img/todos_produtos/icone_seta_baixo.png');

// Chama a função para o conteúdo de "Artistas"
toggleContent('button_filtro_artistas', 'artistas', 'button_filtro_artistas', '../../img/todos_produtos/icone_seta_direita.png', '../../img/todos_produtos/icone_seta_baixo.png');

// Chama a função para o conteúdo de "Músicas"
toggleContent('button_filtro_musicas', 'musicas', 'button_filtro_musicas', '../../img/todos_produtos/icone_seta_direita.png', '../../img/todos_produtos/icone_seta_baixo.png');   