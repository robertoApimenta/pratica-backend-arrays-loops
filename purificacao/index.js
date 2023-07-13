const stringCorrompida = '*Canis %lupus )familiaris';

let dadoPurificado = '';

for (i = 0; i < stringCorrompida.length; i++) {
    if (stringCorrompida[i] != '!' &&
        stringCorrompida[i] != '@' &&
        stringCorrompida[i] != '#' &&
        stringCorrompida[i] != '$' &&
        stringCorrompida[i] != '%' &&
        stringCorrompida[i] != '&' &&
        stringCorrompida[i] != '*' &&
        stringCorrompida[i] != '(' &&
        stringCorrompida[i] != ')')
        dadoPurificado = dadoPurificado + stringCorrompida[i];
}

console.log(dadoPurificado);