function contarVogais(frase) {
    const vogais = "aeiouAEIOU";
    let cont = 0;

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            cont++;
        }
    }

    return contador;
}
