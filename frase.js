function fraseMotivacional() {
    const frases = [
        "Não importa o quão devagar você vá, desde que você não pare.",
        "Acredite que você pode e você já está no meio do caminho.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "Seu único limite é você mesmo.",
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "Não espere por oportunidades, crie-as.",
        "A vida é 10% o que acontece com você e 90% como você reage a isso.",
        "Você não precisa ser ótimo para começar, mas você precisa começar para ser ótimo.",
        "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos."
    ];

    const indice = Math.floor(Math.random() * frases.length);

    return frases[indice];
}

console.log(fraseMotivacional());