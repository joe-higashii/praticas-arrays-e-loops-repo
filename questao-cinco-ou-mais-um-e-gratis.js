// Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

// Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

// Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

// Você ficou com essa tarefa.

// Input Format

// A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

// Output Format

// Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).

// Sample Input 0

// 100 500 100 200 50

// Sample Output 0

// 900

// Sample Input 1

// 100 100 100 50

// Sample Output 1

// 350

function solucao(precos) {
    //seu codigo aqui
    //1. verificar se tem promocao (ter 5 ou mais itens)
    //2. se nao tiver promocao
    //2.1 soma tudo - varrer o array somando o item atual ao total
    //3. se tiver promocao
    //3.1 somar tudo
    //3.2 identificar o item mais barato
    //3.3 totalAPagar = soma - desconto
    
    // let quantidadeDeProdutos = precos.lenght;
    
    //encontrando o menor numero
    //percorrer o array
    //verificar se o item atual e o menor que o menor de todos ate agora
    //se for, substitui
    //se nao, segue em frente
    
    let soma = 0;
    let menor = precos[0];
    
    for (let itemAtual of precos) {
        //calculando a soma total
        soma += itemAtual;
        
        //se o item atual for menor que o menor ate agora
        if (itemAtual < menor) {
            //o item atual e o novo menor
            menor = itemAtual;
        }
    }
    
    if (precos.length >= 5) {
        //tem promocao
        console.log(soma - menor);
    }   else {
        //nao tem promocao
        console.log(soma);
    }
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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
