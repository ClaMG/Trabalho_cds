// Função para mostrar ou esconder o submenu "Gênero" quando o botão for clicado
function aparecer_g(el) {
    const sumir_g = document.getElementById('sumir_g'); // Seleciona o submenu "Gênero"
    
    // Verifica se o submenu "Gênero" está visível
    // Se estiver visível (display: flex), esconde
    if (sumir_g.style.display === 'flex' || getComputedStyle(sumir_g).display === 'flex') {
        sumir_g.style.display = 'none'; // Esconde o submenu
    } else {
        sumir_g.style.display = 'flex'; // Exibe o submenu
        // Se o submenu "Gênero" for exibido, esconde o submenu "Artistas"
        document.getElementById('sumir_a').style.display = 'none';
    }
}

// Função para mostrar ou esconder o submenu "Artistas" quando o botão for clicado
function aparecer_a(el) {
    const sumir_a = document.getElementById('sumir_a'); // Seleciona o submenu "Artistas"
    
    // Verifica se o submenu "Artistas" está visível
    // Se estiver visível (display: flex), esconde
    if (sumir_a.style.display === 'flex' || getComputedStyle(sumir_a).display === 'flex') {
        sumir_a.style.display = 'none'; // Esconde o submenu
    } else {
        sumir_a.style.display = 'flex'; // Exibe o submenu
        // Se o submenu "Artistas" for exibido, esconde o submenu "Gênero"
        document.getElementById('sumir_g').style.display = 'none';
    }
}

// Função que garante que apenas um dos submenus estará visível ao carregar a página
window.onload = function() {
    const sumir_g = document.getElementById('sumir_g'); // Seleciona o submenu "Gênero"
    const sumir_a = document.getElementById('sumir_a'); // Seleciona o submenu "Artistas"
    
    // Inicializa o submenu "Gênero" como invisível, caso não tenha sido definido previamente
    if (!sumir_g.style.display && getComputedStyle(sumir_g).display !== 'flex') {
        sumir_g.style.display = 'none'; // Esconde "Gênero" por padrão
    }
    // Inicializa o submenu "Artistas" como invisível, caso não tenha sido definido previamente
    if (!sumir_a.style.display && getComputedStyle(sumir_a).display !== 'flex') {
        sumir_a.style.display = 'none'; // Esconde "Artistas" por padrão
    }
};
