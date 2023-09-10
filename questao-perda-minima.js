//Letícia tem um gráfico de preços projetados para uma casa nos próximos anos. Ela deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. Ela quer minimizar suas perdas financeiras.

//Por exemplo, a casa é avaliada em preço = [20, 15, 8, 2, 12] nos próximos 5 anos. Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes. Sua perda mínima seria incorrida comprando no 2º ano em preço[1] = 15 e revendendo no 5º ano em preço[4] = 12.

//Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar a casa e revendê-la nos próximos anos.

//Input Format

//A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.

//Output Format

//A saída sempre será um inteiro representando a perda mínima que Letícia terá.

//Sample Input 0

//5 10 3
//Sample Output 0

//2
//Explanation 0

//Letícia compra a casa no 1º ano em preço = 5 e revende no 3º ano em preço = 3 resultando em uma perda de 5 - 3 = 2.

//Sample Input 1

//30 10 54 76 1 4 35
//Sample Output 1

//6
//Explanation 1

//Letícia compra a casa no 2º ano em preço = 10 e revende no 6º ano em preço = 4 resultando em uma perca de 10 - 4 = 6.

// function solucao(precos) {
// seu codigo aqui
//varrer todas as possibilidades de compra e venda
//ver, para cada uma se e prejuizo
//se for, anotar esse valor
//depois, ver qual foi o menor prejuizo

let precos = [5, 10, 3];
let menorPrejuizo = 999999999999;
for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        const compra = precos[i];
        const venda = precos[j];
        const prejuizo = compra - venda;

        if (prejuizo > 0) {
            //realmente deu prejuizo
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }
        }
    }
}
console.log(menorPrejuizo);

// function processData(input) {
//     const precos = input.split(" ").map(x => parseInt(x));
//  	solucao(precos);
//}

//process.stdin.resume();
//process.stdin.setEncoding("ascii");
//_input = "";
//process.stdin.on("data", function (input) {
//    _input += input;
//});

//process.stdin.on("end", function () {
//   processData(_input);
//});
