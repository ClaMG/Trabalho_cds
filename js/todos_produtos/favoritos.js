document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".img_favorito");

    // Caminhos das imagens
    const img1 = "../../img/todos_produtos/icone_favoritos.png"; // Imagem inicial
    const img2 = "../../img/todos_produtos/icone_favoritos_selecionado.png"; // Imagem ao clicar

    img.addEventListener("click", function() {
        // Alterna entre as imagens
        if (img.getAttribute("src") === img1) {
            img.setAttribute("src", img2);
        } else {
            img.setAttribute("src", img1);
        }
    });
});
