const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

let erros = 0;

for (i = 0; i < palavras.length; i++) {
    if (palavras[i].charAt(0) != letra)
        erros = erros + 1;
}

console.log(erros);