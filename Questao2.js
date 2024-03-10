const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));
    if (palpite < numeroSecreto) {
        console.log("O número secreto é maior.");
    } else if (palpite > numeroSecreto) {
        console.log("O número secreto é menor.");
    } else {
        console.log("Parabéns! Você acertou o número secreto.");
    }
} while (palpite !== numeroSecreto);