function togglePassword() {
    // Obtém a referência ao campo de entrada de senha
    let passwordInput = document.getElementById("password");
    
    // Obtém a referência ao ícone do olho
    let eyeIcon = document.getElementById("img_olho");

    // Verifica se o tipo do campo de senha é "password"
    if (passwordInput.type === "password") {
        // Altera o tipo para "text" para exibir a senha
        passwordInput.type = "text";
        
        // Altera a imagem do ícone para um olho aberto
        eyeIcon.src = "../../img/login/icone_olho_aberto.png";
    } else {
        // Retorna o tipo do campo para "password" para esconder a senha
        passwordInput.type = "password";
        
        // Altera a imagem do ícone para um olho fechado
        eyeIcon.src = "../../img/login/icone_olho_fechado.png";
    }
}
