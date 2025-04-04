const checkboxSim = document.getElementById('sim');
const checkboxNao = document.getElementById('nao');

    checkboxSim.addEventListener('change', () => {
      if (checkboxSim.checked) {
        checkboxNao.checked = false;
      }
    });

    checkboxNao.addEventListener('change', () => {
      if (checkboxNao.checked) {
        checkboxSim.checked = false;
      }
});