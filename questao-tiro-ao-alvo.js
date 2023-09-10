// Numa competição de tiro ao alvo, cada competidor pode fazer uma certa quantidade de disparos. A cada disparo é atribuida uma pontuação que vai de 0 a 100. Para que o competidor seja aprovado para a próxima fase, ele precisa ter pelo menos 3 disparos com pontuação acima de 70 pontos.

// Input Format

// A entrada do problema será sempre um array de números chamado disparos, que contém a pontuação de cada disparo.

// Output Format

// Caso o competidor seja aprovado, imprima na tela a quantidade de disparos acima de 70 pontos. Caso o competidor seja eliminado, imprima apenas a mensagem ELIMINADO

// Sample Input 0

// 0 10 50 70 80 30
// Sample Output 0

// ELIMINADO
// Explanation 0

// Como o competidor só acertou um tiro acima de 70 pontos, ele foi eliminado.

// Sample Input 1

// 0 50 90 80 100 80 40
// Sample Output 1

// 4
// Explanation 1

// O competidor conseguiu 4 tiros acima de 70 pontos: 90, 80, 100 e 80 novamente.



function solucao(disparos) {
    const pontuacoesAcimaDe70 = disparos.filter(pontuacao => pontuacao > 70);

    if (pontuacoesAcimaDe70.length >= 3) {
        console.log(pontuacoesAcimaDe70.length);
    } else {
        console.log("ELIMINADO");
    }
}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});