// Função para aplicar a máscara no campo CEP
document.getElementById('cep').addEventListener('input', function(e) {
    let cep = e.target.value;
    
    // Remove todos os caracteres não numéricos
    cep = cep.replace(/\D/g, '');
    
    // Aplica a máscara
    if (cep.length <= 5) {
        cep = cep.replace(/(\d{1,5})/, '$1');
    } else {
        cep = cep.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    }

    // Atualiza o valor do campo de CEP
    e.target.value = cep;
});