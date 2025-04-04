document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn_filtro');
    const filtros = document.querySelector('#filtro');

    btn.addEventListener('click', () => {
      filtros.classList.toggle('mostrar');
    });
  });