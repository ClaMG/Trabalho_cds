 // Seleciona um botão de navegação manual do carrossel
 var radio = document.querySelector('.manual_btn');

 // Inicializa o contador de imagens do carrossel
 var cont = 1;

 // Define a primeira imagem como selecionada ao carregar a página
 document.getElementById('radio-1').checked = true;

 // Configura um intervalo para trocar as imagens automaticamente a cada 5 segundos
 setInterval(() => {
     trocarSlidePrincipal();
 }, 5000);

 // Função que avança para a próxima imagem do carrossel
 function trocarSlidePrincipal() {
     cont++;

     // Se chegar além da última imagem, volta para a primeira
     if (cont > 3) {
         cont = 1;
     }

     // Atualiza a seleção da imagem correspondente
     document.getElementById('radio-' + cont).checked = true;
 }