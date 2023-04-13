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
