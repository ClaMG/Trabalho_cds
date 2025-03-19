// Função para aplicar a máscara no campo Telefone
document.getElementById('telefone').addEventListener('input', function(e) {
    let telefone = e.target.value;
    
    // Remove todos os caracteres não numéricos
    telefone = telefone.replace(/\D/g, '');

    // Aplica a máscara de telefone
    if (telefone.length <= 2) {
        telefone = telefone.replace(/(\d{1,2})/, '($1)');
    } else if (telefone.length <= 6) {
        telefone = telefone.replace(/(\d{2})(\d{1,4})/, '($1) $2');
    } else {
        telefone = telefone.replace(/(\d{2})(\d{1,4})(\d{1,4})/, '($1) $2-$3');
    }

    // Atualiza o valor do campo de telefone
    e.target.value = telefone;
});
