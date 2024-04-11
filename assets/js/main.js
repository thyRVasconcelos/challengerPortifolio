function validarFormulario() {
    // Obtendo os valores dos campos do formulário
    var nome = document.forms["meuForm"]["nome"].value;
    var email = document.forms["meuForm"]["email"].value;
    var assunto = document.forms["meuForm"]["assunto"].value;
    var mensagem = document.forms["meuForm"]["mensagem"].value;
    
    // Validando se os campos estão vazios
    if (nome.trim() == "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }
    if (email == "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }
    if (assunto == "") {
        alert("Por favor, preencha o campo Assunto.");
        return false;
    }
    if (mensagem == "") {
        alert("Por favor, preencha o campo Mensagem.");
        return false;
    }
    // Validando o formato do email utilizando expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }
    // Se tudo estiver válido, o formulário é enviado
    return true;
}