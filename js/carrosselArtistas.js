// Inicializa o contador de imagens do carrossel
var conta = 1;

// Define a primeira imagem como selecionada ao carregar a página
document.getElementById('radio_1').checked = true;

// Configura um intervalo para trocar as imagens automaticamente a cada 5 segundos
setInterval(() => {
    trocarSlideArtistas();
}, 5000);

// Função que avança para a próxima imagem do carrossel
function trocarSlideArtistas() {
    conta++;

    // Se chegar além da última imagem, volta para a primeira
    if (conta > 3) {
        conta = 1;
    }

    // Atualiza a seleção da imagem correspondente
    document.getElementById('radio_' + conta).checked = true;
}