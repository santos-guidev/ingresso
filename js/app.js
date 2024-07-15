document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do DOM
    const tipoIngresso = document.getElementById("tipo-ingresso");
    const quantidadeInput = document.getElementById("qtd");

    const qtdPista = document.getElementById("qtd-pista");
    const qtdSuperior = document.getElementById("qtd-superior");
    const qtdInferior = document.getElementById("qtd-inferior");

    // Função para processar a compra
    function comprar() {
        // Obtém o tipo de ingresso e a quantidade selecionados pelo usuário
        const tipo = tipoIngresso.value;
        const quantidade = parseInt(quantidadeInput.value);

        // Verifica se a quantidade é válida
        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Por favor, insira uma quantidade válida.");
            return;
        }

        // Verifica o tipo de ingresso e atualiza a quantidade disponível
        switch (tipo) {
            case "pista":
                if (quantidade > parseInt(qtdPista.textContent)) {
                    alert("Quantidade insuficiente disponível para Pista.");
                    return;
                }
                qtdPista.textContent = parseInt(qtdPista.textContent) - quantidade;
                break;
            case "superior":
                if (quantidade > parseInt(qtdSuperior.textContent)) {
                    alert("Quantidade insuficiente disponível para Cadeira Superior.");
                    return;
                }
                qtdSuperior.textContent = parseInt(qtdSuperior.textContent) - quantidade;
                break;
            case "inferior":
                if (quantidade > parseInt(qtdInferior.textContent)) {
                    alert("Quantidade insuficiente disponível para Cadeira Inferior.");
                    return;
                }
                qtdInferior.textContent = parseInt(qtdInferior.textContent) - quantidade;
                break;
            default:
                alert("Tipo de ingresso inválido.");
                return;
        }

        // Mensagem de sucesso
        alert("Compra realizada com sucesso!");
    }

    // Adiciona o evento de clique ao botão "Comprar"
    document.querySelector("button[type='button']").addEventListener("click", comprar);
});
