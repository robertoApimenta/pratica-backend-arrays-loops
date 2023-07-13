const sequencia = '>>>>>>>>>';

let cliques = 0;

for (i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === '>')
        cliques++;
    else
        cliques--;
}
if (cliques > 6)
    console.log(cliques - 6)
else
    console.log(cliques);