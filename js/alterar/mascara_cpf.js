// Função para aplicar a máscara no campo CPF
document.getElementById('cpf').addEventListener('input', function(e) {
    let cpf = e.target.value;
    
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Aplica a máscara
    if (cpf.length <= 3) {
        cpf = cpf.replace(/(\d{1,3})/, '$1');
    } else if (cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else if (cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }

    // Atualiza o valor do campo de CPF
    e.target.value = cpf;
});