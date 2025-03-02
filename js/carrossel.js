// Seleciona o primeiro botão de navegação manual (caso precise ser manipulado)
var radio = document.querySelector('.manual_btn');

// Contador para controlar qual slide está ativo
var cont = 1;

// Inicializa o primeiro slide (radio1) como sendo o ativo
document.getElementById('radio1').checked = true;

// Configura um intervalo para mudar a imagem automaticamente a cada 5 segundos
setInterval(() => {
    proximaImg(); // Chama a função para mudar para o próximo slide
}, 5000);

// Função para mudar para o próximo slide
function proximaImg(){
    cont++; // Incrementa o contador para passar para o próximo slide

    // Se o contador ultrapassar 3 (o número máximo de slides), ele é resetado para 1
    if(cont > 3){
        cont = 1;
    }

    // Marca o botão de rádio correspondente ao slide atual como "checked" (ativo)
    document.getElementById('radio' + cont).checked = true;
}
