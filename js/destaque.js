// Função para verificar se as imagens estão visíveis
function checkVisibility() {
    const leftImage = document.querySelector('img.left');
    const rightImage = document.querySelector('img.right');
    
    // Verifica se a imagem da esquerda está visível
    const leftRect = leftImage.getBoundingClientRect();
    if (leftRect.top <= window.innerHeight && leftRect.bottom >= 0) {
      leftImage.classList.add('visible'); // Adiciona a classe 'visible' à imagem da esquerda
    }
  
    // Verifica se a imagem da direita está visível
    const rightRect = rightImage.getBoundingClientRect();
    if (rightRect.top <= window.innerHeight && rightRect.bottom >= 0) {
      rightImage.classList.add('visible'); // Adiciona a classe 'visible' à imagem da direita
    }
  }
  
  // Detecta quando a página for rolada
  window.addEventListener('scroll', checkVisibility);
  