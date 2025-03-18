function togglePassword() {
    let passwordInput = document.getElementById("password");
    let eyeIcon = document.getElementById("img_olho");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../img/icones/icone_olho_aberto.png"; // Troca o ícone para olho aberto
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "../img/icones/icone_olho_fechado.png"; // Volta para o ícone de olho fechado
    }
}