let dataNascimento = new Date(prompt("Digite sua data de nascimento (AAAA-MM-DD):"));
let dataAtual = new Date();
let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

if (dataAtual.getMonth() < dataNascimento.getMonth() ||
    (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
    idade--;
}

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}