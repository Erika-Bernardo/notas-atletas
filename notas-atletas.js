let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function calcularMediaAtletas(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        // O código que vai aqui será executado
        // uma vez para cada item da matriz
        let atleta = atletas[i];

        //Ordenar as notas em ordem crescente
        let notasOrdenadas = atleta.notas.sort(function (a,b){
            return a - b;
        });

        //Elimina a maior e a menor nota
        let notasValidas = notasOrdenadas.slice(1, 4);

        // Calcula a média das notas Válidas
        let soma = 0;

        notasValidas.forEach(function (nota) {
            soma = soma + nota;
        });

        let media = soma / notasValidas.length;

        // Exibe no console a saída do resultado:
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
        console.log(`Média Válida: ${media}`);
        console.log('');
    }
}

calcularMediaAtletas(atletas);