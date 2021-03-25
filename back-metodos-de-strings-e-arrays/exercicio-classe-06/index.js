const cpf = "12345678900";
const cnpj = "12345678000199";

//usar splice

const cpfvalido = cpf.length === 11
const cnpjvalido = cnpj.length === 14



function formatarCpf(cpf) {
    let numcpf = cpf.split(""); 

    if(cpfvalido) {
        numcpf.splice(3,0,".");
        numcpf.splice(7,0,".");
        numcpf.splice(11,0,"-");
        console.log(numcpf.join(""))
    } else {
        console.log("CPF Inválido")
    }
}
formatarCpf(cpf)

function formatarCnpj(cnpj) {
    let numcnpj = cnpj.split(""); 

    if(cnpjvalido) {
        numcnpj.splice(2,0,".");
        numcnpj.splice(6,0,".");
        numcnpj.splice(10,0,"/");
        numcnpj.splice(15,0,"-");
        console.log(numcnpj.join(""))
    } else {
        console.log("CNPJ Inválido")
    }
}
formatarCnpj(cnpj)

