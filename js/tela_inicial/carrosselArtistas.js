// Contador que controla o slide atual do carrossel de artistas
var conta = 1;

// Ao carregar a página, define o primeiro slide como ativo
document.getElementById('radio_1').checked = true;

// Define um intervalo para trocar os slides automaticamente a cada 5 segundos
setInterval(() => {
    trocarSlideArtistas();
}, 5000);

/**
 * Função que avança para o próximo slide do carrossel de artistas.
 * Se estiver no último slide, volta para o primeiro.
 */
function trocarSlideArtistas() {
    conta++;

    // Se o contador ultrapassar o número total de slides (3), reinicia no primeiro slide
    if (conta > 3) {
        conta = 1;
    }

    // Marca o botão de rádio correspondente ao slide atual, alterando a exibição do carrossel
    document.getElementById('radio_' + conta).checked = true;
}
