const precos = [100, 500, 100, 200, 50, 100, 500, 100, 200, 50];

let menorPreco = 999999;
let valor = 0;

if (precos.length >= 5) {
    for (i = 0; i < precos.length; i++) {
        if (precos[i] < menorPreco)
            menorPreco = precos[i];
    }
    for (i = 0; i < precos.length; i++) {
        valor = valor + precos[i];
    }
    console.log(valor - menorPreco);
} else {
    for (i = 0; i < precos.length; i++) {
        valor = valor + precos[i];
    }
    console.log(valor);
}
