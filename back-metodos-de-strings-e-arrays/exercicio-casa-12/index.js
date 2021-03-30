const email = "aluno@cubos.academy";

function validarEmail() {
    let emailVerificado = email.split(""); 

    if(emailVerificado[0] === "." || emailVerificado[emailVerificado.length - 1] === "." || !emailVerificado.includes("@") || !emailVerificado.includes(".") ) {
        console.log("Email Inválido")
    } else {
        console.log("Email Válido")
    }
}

validarEmail(email)