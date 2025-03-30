// Obtém o elemento do input range e o elemento onde o valor será mostrado
const rangeInput = document.getElementById('valor_input');
const rangeValue = document.getElementById('valor_range');

// Atualiza o valor exibido em tempo real enquanto o usuário interage com o slider
rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value; // Atualiza o valor do texto para o valor atual do range
});