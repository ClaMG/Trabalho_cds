document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll(".img_favorito"); // Seleciona todas as imagens com a classe "img_favorito"

    // Caminhos das imagens
    const img1 = "../../../../img/favoritos/icone_favoritos.png"; // Imagem inicial
    const img2 = "../../../../img/favoritos/icone_favoritos_selecionado.png"; // Imagem ao clicar

    imgs.forEach(function (img) {
        img.addEventListener("click", function () {
            // Alterna entre as imagens
            if (img.getAttribute("src") === img1) {
                img.setAttribute("src", img2);
            } else {
                img.setAttribute("src", img1);

                // Esconde o produto (elemento pai)
                const produto = img.closest(".produto"); // Ajuste essa classe para corresponder ao contêiner do produto
                if (produto) {
                    produto.style.display = "none";
                }
            }
        });

        // Verifica ao carregar a página se a imagem está no estado "img1" e oculta o produto
        if (img.getAttribute("src") === img1) {
            const produto = img.closest(".produto");
            if (produto) {
                produto.style.display = "none";
            }
        }
    });
});
