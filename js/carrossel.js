// Seleciona um dos botões de navegação manual do carrossel (embora não seja usado diretamente no código)
var radio = document.querySelector('.manual_btn');

// Contador que controla qual imagem do carrossel está sendo exibida
var cont = 1;

// Ao carregar a página, define a primeira imagem do carrossel como ativa
document.getElementById('radio-1').checked = true;

// Define um intervalo para trocar as imagens automaticamente a cada 5 segundos
setInterval(() => {
    trocarSlidePrincipal();
}, 5000);

/**
 * Alterna para o próximo slide do carrossel.
 * Se estiver no último slide, volta para o primeiro.
 */
function trocarSlidePrincipal() {
    cont++;

    // Se o contador ultrapassar o número total de slides (3), reinicia no primeiro slide
    if (cont > 3) {
        cont = 1;
    }

    // Atualiza a seleção do botão de rádio correspondente ao slide atual
    document.getElementById('radio-' + cont).checked = true;
}
