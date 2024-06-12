function substituirMatriz(matriz, indice) {
    for (let i = 0; i < matriz[indice - 1].length; i++) {
        matriz[indice - 1][i] = 0;
    }

    return matriz;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(substituirMatriz(matriz, 3));