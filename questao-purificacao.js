// Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

// O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

// A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

// Dado corrompido	            Dado purificado
// *Canis %lupus )familiaris	Canis lupus familiaris

//Input Format

//A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().

//Output Format

//A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().

//Sample Input 0

//*Canis %lupus )familiaris

//Sample Output 0

//Canis lupus familiaris

function solucao(stringCorrompida) {
    // bloco de notas
    // 1. olhar cada um dos caracteres -ok
    // 2. ver se pode o caractere em questao -ok
    // 3. se for permitido, escrevo -ok
    // 4. se nao for permitido, ignoro e olho o proximo -ok
    // 5. quando acabarem os caracteres e so exibir o que eu escrevi

    let dadoPurificado = "";
    for (let caractere of stringCorrompida) {
        if (caractere === "!" || caractere === "@" || caractere === "#" || caractere === "$" || caractere === "%" || caractere === "&" || caractere === "*" || caractere === "(" || caractere === ")" || caractere === ".") {
            //ignorar
        } else {
            dadoPurificado = dadoPurificado + caractere;
            //dadoPurificado += caractere;
        }
    }
    console.log(dadoPurificado);
}

function processData(input) {
    solucao(input);
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
